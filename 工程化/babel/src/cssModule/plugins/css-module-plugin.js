
const selectorParser = require("postcss-selector-parser");

// 随机生成一个选择器名称
const createScopedName = (name) => {
    const randomStr = Math.random().toString(16).slice(2);
    return `_${randomStr}__${name}`;
}

const plugin = (options = {}) => {
    return {
        postcssPlugin: 'css-module-plugin',
        Once(root, helpers) {
            const exports = {};
            // 导出 scopedName
            function exportScopedName(name) {
                // css名称与其对应的作用域名城的映射
                const scopedName = createScopedName(name);

                exports[name] = exports[name] || [];

                if (exports[name].indexOf(scopedName) < 0) {
                    exports[name].push(scopedName);
                }

                return scopedName;
            }
            // 本地节点，也就是需要作用域隔离的节点:local()
            function localizeNode(node) {
                switch (node.type) {
                    case "selector":
                        node.nodes = node.map(localizeNode);
                        return node;
                    case "class":
                        return selectorParser.className({
                            value: exportScopedName(
                                node.value,
                                node.raws && node.raws.value ? node.raws.value : null
                            ),
                        });
                    case "id": {
                        return selectorParser.id({
                            value: exportScopedName(
                                node.value,
                                node.raws && node.raws.value ? node.raws.value : null
                            ),
                        });
                    }
                }
            }
            // 遍历节点
            function traverseNode(node) {
                // console.log('【node】', node)
                if(options.module) {
                    const selector = localizeNode(node.first, node.spaces);

                    node.replaceWith(selector);
                    return node
                }
                switch (node.type) {
                    case "root":
                    case "selector": {
                        node.each(traverseNode);
                        break;
                    }
                    // 选择器
                    case "id":
                    case "class":
                        exports[node.value] = [node.value];
                        break;
                    // 伪元素
                    case "pseudo":
                        if (node.value === ":local") {
                            const selector = localizeNode(node.first, node.spaces);

                            node.replaceWith(selector);

                            return;
                        }else if(node.value === ":global") {

                        }
                }
                return node;
            }

            // 遍历所有rule类型节点
            root.walkRules((rule) => {
                const parsedSelector = selectorParser().astSync(rule);
                rule.selector = traverseNode(parsedSelector.clone()).toString();
                // 遍历所有decl类型节点 处理 composes
                rule.walkDecls(/composes|compose-with/i, (decl) => {
                    const localNames = parsedSelector.nodes.map((node) => {
                        return node.nodes[0].first.first.value;
                    })
                    const classes = decl.value.split(/\s+/);
                    
                    classes.forEach((className) => {
                        const global = /^global\(([^)]+)\)$/.exec(className);
                        // console.log(exports, className, '-----')
                        if (global) {
                            localNames.forEach((exportedName) => {
                                exports[exportedName].push(global[1]);
                            });
                        } else if (Object.prototype.hasOwnProperty.call(exports, className)) {
                            localNames.forEach((exportedName) => {
                                exports[className].forEach((item) => {
                                    exports[exportedName].push(item);
                                });
                            });
                        } else {
                            console.log('error')
                        }
                    });

                    decl.remove();
                });

            });

            // 处理 :local keyframes
            root.walkAtRules(/keyframes$/i, (atRule) => {
                const localMatch = /^:local\((.*)\)$/.exec(atRule.params);

                if (localMatch) {
                    atRule.params = exportScopedName(localMatch[1]);
                }
            });
            // 生成 :export rule
            const exportedNames = Object.keys(exports);

            if (exportedNames.length > 0) {
                const exportRule = helpers.rule({ selector: ":export" });

                exportedNames.forEach((exportedName) =>
                    exportRule.append({
                        prop: exportedName,
                        value: exports[exportedName].join(" "),
                        raws: { before: "\n  " },
                    })
                );
                root.append(exportRule);
            }
        },
    }
}

plugin.postcss = true

module.exports = plugin


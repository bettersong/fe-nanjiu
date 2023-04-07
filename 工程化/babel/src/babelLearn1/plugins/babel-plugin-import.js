
const t = require('@babel/types')


module.exports = () => {
    return {
        visitor: {
            ImportDeclaration(path) {
                // console.log(path)
                console.log('--22')
                // return

                const MODULE = path.node.source.value
                const specs = path.node.specifiers
                if(specs.length == 0) {
                    // 空导入直接删除
                    path.remove()
                    return
                }
            
                // 转换命名导入
                const imports = []
                // console.log(specs, '-length')
                for (const spec of specs) {
                    const named = MODULE + '/' + spec.imported.name
                    console.log(named)
                    // const local = spec.local
                    // imports.push(t.importDeclaration([t.importDefaultSpecifier(local)], t.stringLiteral(named)))
                    // imports.push(t.importDeclaration([], t.stringLiteral(`${named}/style.css`)))
                }
            
                // 替换原有的导入语句
                path.replaceWithMultiple(imports)
            }
        }
    }
}
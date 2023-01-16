const t = require("@babel/types")

module.exports = function() {
    // 处理模版标签
    return {
        visitor: {
            // 处理标签
            JSXElement(path) {
                const { node } = path
                // 将div标签替换为view标签
                if(node.openingElement.name?.name === 'div') {
                    node.openingElement.name.name = 'view'
                    node.closingElement.name.name = 'view'
                }
                // 将span标签替换成text标签
                if(node.openingElement.name?.name === 'span') {
                    node.openingElement.name.name = 'text'
                    node.closingElement.name.name = 'text'
                }
                // 将img标签替换成image标签
                if(node.openingElement.name?.name === 'img') {
                    node.openingElement.name.name = 'image'
                }
            },
            // 处理表达式
            JSXExpressionContainer( path ) {
                const { node } = path
                if(node.expression.type === 'ObjectExpression') {
                    const newNode = t.jsxExpressionContainer(t.identifier(`{${node.expression.properties[0].key.name}}`))
                    path.replaceWith(newNode)
                }
            },
            // 处理属性
            JSXAttribute( path ) {
                const { node } = path
                // 处理指令
                if(node.name.name === 'v-if') {
                    node.name.name = 'wx:if'
                    node.value.value = `{{${node.value.value}}}`
                }
                if(node.name.name === 'v-else') {
                    node.name.name = 'wx:else'
                }

                if(node.name.namespace?.name === 'v-on' && node.name?.name.name === 'click') {
                    const newNode = t.jsxAttribute(t.jsxIdentifier('bindtap'), node.value)
                    path.replaceWith(newNode)

                } 
            },
        }
    }
}
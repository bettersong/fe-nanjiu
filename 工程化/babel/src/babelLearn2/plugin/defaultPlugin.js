
const t = require("@babel/types")

module.exports = () => {
    return {
        visitor: {
            // 处理对象方法
            ObjectMethod(path) {
                const {node} = path
                // 处理data(){} 为 data:{}
                if(node.key.name === 'data') {
                    const newNode = t.objectProperty(t.identifier('data'), node.body.body[0].argument)
                    path.replaceWith(newNode)
                }
            },
            // 处理export default 为 page构造函数
            ExportDefaultDeclaration(path) {
                const {node} = path
                // console.log(node.declaration, '--ss')
                const newNode = t.callExpression(t.identifier('Page'), [node.declaration])
                path.replaceWith(newNode)
            }
        }
    }
}
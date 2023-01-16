const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default

// console.log(traverse)


const codeStr = `
    const name = '前端南玖'
`

const ast = parser.parse(codeStr, {
    sourceType: "unambiguous"
})
// console.log(ast)

traverse(ast, {
    // enter(path) {
    //     console.log(path)
    // },
    VariableDeclaration(path) {
        console.log('【path】', path.replaceWith)
        const { node } = path
        console.log(node.kind)
        if(node.kind === 'const') {
            node.kind = 'var'
        }
    }
})
// console.log(ast)
const res = generate(ast, {sourceMaps: true})
console.log(res)
// const res2 = parser.parseExpression(code)
// console.log(res2)


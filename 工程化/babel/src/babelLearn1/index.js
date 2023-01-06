// import babel from "@babel/core"
const babel  = require("@babel/core")
// console.log(babel)
let code = `
    let fn = () => {
        console.log('fn')
    }
`

// const ast = babel.parse(code)
// console.log('AST', ast)
const options = {
    presets: ["@babel/preset-env"],
    ast: true
}
let res = babel.transformSync(code, options)
console.dir(res.code)







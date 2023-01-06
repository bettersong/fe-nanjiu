const parser = require("@babel/parser")

// console.log(parser)
const code = `
    let fn = () => {
        console.log("前端南玖")
    }
`

const res = parser.parse(code)
console.log(res)
// import babel from "@babel/core"
const babel  = require("@babel/core")
// console.log(babel)
let originCode = `
    let fn = () => {
        const a = 1
        console.log('前端南玖')
        if(a) {
            console.log(a)
        }else {
            return false
        }
    }
`


let removeConsolePlugin = function() {
    return {
        
        // 访问器
        visitor: {
            CallExpression(path, state) {
                const { node } = path

                if(node?.callee?.object?.name === 'console') {
                    console.log('找到了console语句')
                    path.parentPath.remove()
                }
            }
        }
    }
}

const options = {
    plugins: [removeConsolePlugin()]
}
let res = babel.transformSync(originCode, options)

console.dir(res.code)







const fs = require('fs')
const vueCompiler = require("vue-template-compiler")
// const babel = require('@babel/core')
const transformScript = require("./lib/transformScript")
// return
// 读取代码，并将vue文件拆分成3部分template、script、style
let getCode = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                return reject(err)
            }
            const res = vueCompiler.parseComponent(data)
            return resolve(res)
        })
    })
    
}


const transform = async (path) => {
    const code = await getCode(path)
    // 根据拆分后的模块进行分别处理
    // console.log(code, '--ss')
    if(code) {
        // 处理 template -->  wxml

        // 处理 script --> js
        transformScript(code.script?.content)
        // 处理 style --> wxss
    }
}

module.exports = {
    getCode,
    transform
}
// transform("./src/index.vue")
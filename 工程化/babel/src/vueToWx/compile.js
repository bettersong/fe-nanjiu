const fs = require('fs')
const vueCompiler = require("vue-template-compiler")
// const babel = require('@babel/core')
const transformScript = require("./lib/transformScript")
const transformStyle = require("./lib/transformStyle")
const transformTemplate = require("./lib/transformTemplate")

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
    // console.log(code)
    // 根据拆分后的模块进行分别处理
    if(code) {
        console.log('【code】', code)
        // 处理 template -->  wxml
        transformTemplate(code.template?.content)
        // 处理 script --> js
        transformScript(code.script?.content)
        // 处理 style --> wxss
        /**
         * style 标签可能有多个，先合并
         */
        const mergeStyle = code.styles?.reduce((acc, current) => {
            return acc.content + current.content
        })
        transformStyle(mergeStyle)
    }
}

module.exports = {
    getCode,
    transform
}
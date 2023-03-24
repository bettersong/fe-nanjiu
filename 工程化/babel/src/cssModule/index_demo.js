const postcss = require('postcss')
const fs = require('fs')
const postcssModulesScope = require('postcss-modules-scope')  // 作用域隔离核心插件
const postcssModulesLocalByDefault = require('postcss-modules-local-by-default')  // 默认local插件
const postcssModulesExtractImports = require('postcss-modules-extract-imports')  // 导入导出插件

let getCode = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                return reject(err)
            }
            resolve(data)
        })
    })
    
}

(async () => {
    const css = await getCode('./css/default.css')
    const pipeline = postcss([
        postcssModulesLocalByDefault(),
        postcssModulesExtractImports(), 
        postcssModulesScope()
    ])

    const res = pipeline.process(css)

    console.log('【output】', res.css)
})()
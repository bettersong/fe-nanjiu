const postcss = require('postcss')
const fs = require('fs')
const postcssModulesScope = require('postcss-modules-scope')  // 作用域隔离核心插件


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
    const css = await getCode('./css/index.css')
    const pipeline = postcss([postcssModulesScope()])

    const res = pipeline.process(css)

    console.log('【output】', res.css)
})()
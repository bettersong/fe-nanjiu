const babel = require('@babel/core')
const babelPluginImport = require('./plugins/babel-plugin-import')
const fs = require('fs')

let getCode = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                return reject(err)
            }
            return resolve(data)
        })
    })
    
}

async function handler() {
    // const code = await getCode('./js/a.js')
    const code = `import {a,b,c, deep as d } from 'utils.js'`
    // console.log(code)
    const res = await babel.transformAsync(code, {
        plugins: [babelPluginImport()]
    })
    console.log('【res】', res.code)
}


handler()
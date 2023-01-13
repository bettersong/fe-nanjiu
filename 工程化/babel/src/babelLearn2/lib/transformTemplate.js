const fs = require("fs")
const path = require("path")
const babel = require("@babel/core")
const jsx = require("@babel/plugin-syntax-jsx") // 用jsx插件来将template部分编译成ast, 也可以用其他的 htmlparser、posthtml-parser
const parseTemplatePlugin = require("../plugin/parseTemplatePlugin")


const options = {
    plugins: [ jsx, parseTemplatePlugin() ]
}

module.exports = async function(code) {
    const res = await babel.transformAsync(code, options)
    // console.log('----', res)
    if(res.code) {
        
        fs.writeFile(path.join("./wx", "wx_index.wxml"), res.code, (err) => {
            if(err) throw err
            console.log('wxml: success')
        })
    }
}
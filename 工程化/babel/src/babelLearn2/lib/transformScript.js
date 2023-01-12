
const babel = require("@babel/core")
const defaultPlugin = require("../plugin/defaultPlugin")
const lifeCyclePlugin = require("../plugin/lifeCyclePlugin")
const fs = require('fs')
const path = require('path')


const options = {
    plugins: [
        defaultPlugin(),     // 默认插件
        lifeCyclePlugin()    // 处理生命周期插件
    ]
}

module.exports = async (code) => {
    // console.log(code, 'ast')
    babel.transformAsync(code, options)
    .then(res => {
        fs.writeFile(path.join('./wx', 'wx_index.js'), res.code, (err) => {
            if(err) throw err
            console.log('success')
        })
    })
}
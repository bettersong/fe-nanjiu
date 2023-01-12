
const postcss = require("postcss")
const less = require("less")
const fs = require('fs')
const path = require('path')
// const plugins = [less({ strictMath: true })]

module.exports = function(code) {
    less.render(code, (err, res) => {
        if(err) throw err
        fs.writeFile(path.join('./wx', 'wx_index.wxss'), res.css, (err) => {
            if(err) throw err
            console.log('success')
        })
    })
}
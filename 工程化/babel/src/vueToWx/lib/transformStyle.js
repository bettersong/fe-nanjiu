
const postcss = require("postcss")
const less = require("less")
const fs = require('fs')
const path = require('path')
const rem2rpx = require("postcss-rem2rpx")


const plugins = [rem2rpx({ rootFontSize: 0.5 })]

module.exports = function(code, from) {
    less.render(code, async (err, res) => {
        if(err) throw err
        const result = await postcss(plugins).process(res.css, { from})
        fs.writeFile(path.join('./wx', 'wx_index.wxss'), result.css, (err) => {
            if(err) throw err
            console.log('wxss: success')
        })
    })
}
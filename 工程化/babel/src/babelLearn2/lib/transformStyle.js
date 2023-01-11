
const postcss = require("postcss")
const less = require('postcss-less-engine')

const plugins = []

module.exports = function(code) {
    postcss(plugins)
    .process(code, {from: undefined})
    .then(result => {
        console.log(result.css)
      })
}
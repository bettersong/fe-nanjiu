const postcss = require('postcss')

const cssModulePlugin = require('./plugins/css-module-plugin')


const css = `
:local(.bg){
    background: #ccc;
}
`


const pipeline = postcss([cssModulePlugin()])

const res = pipeline.process(css)

console.log('【output】', res.css)








const babel = require("@babel/core")
const defaultPlugin = require("../plugin/defaultPlugin")
const lifeCyclePlugin = require("../plugin/lifeCyclePlugin")

const options = {
    plugins: [defaultPlugin(), lifeCyclePlugin()]
}

module.exports = async (code) => {
    // console.log(code, 'ast')

    babel.transformAsync(code, options).then(res => {
        console.log('babel', res.code)
    })
}
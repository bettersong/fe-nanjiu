const postcss = require('postcss')
const fs = require('fs')
const vueCompiler = require('vue-template-compiler')
const cssModulePlugin = require('./plugins/css-module-plugin')

const getCode = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                return reject(err)
            }
            const res = vueCompiler.parseComponent(data)  // 解析vue文件
            return resolve(res)
        })
    })
}


const middleHandle = async (path) => {
    const code = await getCode(path)
    // console.log('【vue】', code)
    // 这里只看style module部分
    if(code.styles) {
        /**
         * style 标签可能有多个，找出所有开启module的style
         */
        const moduleStyles = code.styles.filter(item => !!item.module)
        // console.log('【module style】', moduleStyles)
        const pipeline = postcss([cssModulePlugin({module: true})])
        const cssList = []
        moduleStyles.forEach(item => {
            cssList.push(pipeline.process(item.content).css)
        })
        

        return cssList
    }
}

middleHandle('./vue/index.vue').then(res => {
    console.log(res)
})





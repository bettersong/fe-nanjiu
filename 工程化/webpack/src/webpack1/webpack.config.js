
const Webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.[hash:6].js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': __dirname + '/src'
        }
    },
    plugins:[
        new Webpack.ProgressPlugin()
    ],
    // mode: 'development'
    watch: true,
}
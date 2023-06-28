const Webpack = require('webpack')
const { VueLoaderPlugin }  = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
// const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].[contenthash:6].js',
        path: __dirname + '/dist',
        clean: true
    },
    resolve: {
        alias: {
            'module': __dirname + '/module',
            '@': __dirname + '/src',
            'utils': __dirname + '/utils',
            'assets': __dirname + '/assets'
        }
    },
    module: {
        rules:[
            {test: /\.vue$/, use: 'vue-loader'},
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                            
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash:6][ext]'
                }
            }
        ]
    },
    plugins:[
        new Webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new copyWebpackPlugin({
            patterns: [
                {from: 'module', to: __dirname + '/dist/module/'}
            ]
        }),
        new miniCssExtractPlugin({
            filename: 'css/[name].[contenthash:6].css'
        }),
    ],
    optimization: {
        // minimize: true,
        // minimizer: [
        //     // '...',
        //     // new cssMinimizerPlugin(),
        //     new terserPlugin({
        //         extractComments: false,  // 关闭注释剥离功能
        //     }),
        //     '...'
        // ],
        // runtimeChunk: 'single'
    },
    target: 'web',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: true,
        static: __dirname + '/dist',
        // open: true,
        proxy: {
            '/api': 'http://localhost:3000'
        },
        watchFiles: ['src/**/*','public/**/*']
    }
}
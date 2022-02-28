import babel from "rollup-plugin-babel"
import serve from "rollup-plugin-serve"


export default {
    input: './src/index.js',  // 打包入口
    output: {
        file: 'dist/umd/vue.js', //出口路径
        name: 'Vue' , // 指定打包后全局变量的名字
        format: 'umd' , // 统一模块规范
        sourcemap: true, // es6->es5 开启源码调试，可以找到源代码报错位置
    },
    plugins:[ //使用的插件
        babel({
            exclude:'node_modules/**' //排除文件
        }),
        process.env.ENV==='development'?serve({
            open:true,
            openPage:'/public/index.html', //默认启动html的路径
            port:3000,
            contentBase: ''
        }):null
    ]
}
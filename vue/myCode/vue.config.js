
module.exports = {
    css: {
        loaderOptions:{
            less: {
                additionalData: ` @import '~@/static/rem.less';`
            }
        }
        
    },
    
    devServer: {
        disableHostCheck: true,
        // proxy: {
        //     '': {
        //         target: 'https://zhuanlan.zhihu.com',
        //         changeOrigin: true
        //     }
        // }
    }
}
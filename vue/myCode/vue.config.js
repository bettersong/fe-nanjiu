
module.exports = {
    css: {
        loaderOptions:{
            less: {
                additionalData: ` @import '~@/static/rem.less';`
            }
        }
        
    },
    
    // devServer: {
    //     proxy: {
    //         '': {
    //             target: 'https://zhuanlan.zhihu.com',
    //             changeOrigin: true
    //         }
    //     }
    // }
}
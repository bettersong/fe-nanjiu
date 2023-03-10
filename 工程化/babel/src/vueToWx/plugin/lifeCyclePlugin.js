const t = require("@babel/types")



// 处理生命周期
module.exports = function() {
    return {
        visitor: {
            ObjectMethod( path ) {
                const { node } = path
                if(node.key.name === 'created') {
                    node.key.name = 'onLoad'
                }
                if(node.key.name === 'mounted') {
                    node.key.name = 'onReady'
                }
            }
        }
    }
}
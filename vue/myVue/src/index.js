import {initMixin} from "./init"
// Vue的声明
function Vue(options) {

    // 进行Vue的初始化操作
    this._init(options)
}

initMixin(Vue) // 给Vue原型上添加_init方法

export default Vue
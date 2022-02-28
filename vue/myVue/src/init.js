import {initState} from "./state"
import {compileToFunction} from "./compiler/index"

export function initMixin(Vue){
    // 初始化流程
    Vue.prototype._init = function (options){
        // console.log(options)
        // 数据劫持
        const vm = this // vue中使用this.$options
        vm.$options = options

        // 初始化状态
        initState(vm)

        //如果页面传入了el,需要将页面渲染出来
        //如果传入了el，就要实现挂载流程
        if(vm.$options.el){
            vm.$mount(vm.$options.el)
        }
    }
    Vue.prototype.$mount = function (el){
        const vm = this
        const options = vm.$options
        el = document.querySelector(el)

        // 默认会先查找render方法，没有render会采用template，template也没有就会使用el中的内容
        if(!options.render) {
            // 对模版进行编译
            let template = options.template
            if(!template && el){
                template = el.outerHTML
            }
            // console.log(template)
            //我们需要将template 转化成render方法 
            const render = compileToFunction(template)
            options.render = render
        }
    }
}
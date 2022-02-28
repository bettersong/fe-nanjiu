import {observe} from "./observe/index"
export function proxy (target,sourceKey,key) {
    // target: 想要代理到的目标对象，sourceKey：想要代理的对象
    const _that = this
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            return _that[sourceKey][key]
        },
        set: function(v){
            _that[sourceKey][key] = v
        }
    })
}

export function initState(vm) {
    const opts = vm.$options;
    // vue的数据来源 属性 方法 数据 计算属性 watch
    // console.log(opts)
    if(opts.props){
        initProps(vm)
    }
    if(opts.methods){
        initMethods(vm)
    }
    if(opts.data){
        initData(vm)
    }
    if(opts.computed){
        initComputed(vm)
    }
    if(opts.watch){
        initWatch(vm)
    }
}
function initProps(vm) {}
function initMethods(vm) {}
function initData(vm) {
    // console.log('初始化数据',vm.$options.data)
    // 数据初始化
    let data = vm.$options.data;
    data = vm._data =  typeof data === 'function' ? data.call(this) : data
    // 对象劫持，用户改变了数据 ==》 刷新页面
    // MVVM模式 数据驱动视图
    Object.keys(data).forEach(i => {
        proxy.call(vm,vm,'_data',i)
    })
    // Object.definePropety() 给属性增加get和set方法
    observe(data)  //响应式原理
}
function initComputed(vm) {}
function initWatch(vm) {}
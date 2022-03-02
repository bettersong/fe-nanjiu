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
function initComputed(vm) {
    /**
     * 初始化computed配置项
     * 为每一个计算属性实例化一个 watcher，并将计算属性代理到vue 实例上
     * 结合watcher.dirty 和 watcher.evaluate 实现computed缓存
     */
    
    // 获取配置项
    const computed = vm.$options.computed
    // 记录watcher
    const watcher = vm._watcher = Object.create(null)
    for(let key in computed) {
        // 实例化watcher，回调函数默认懒执行
       watcher[key] =  new Watcher(computed[key], {lazy:true}, vm)
       // 将computed 属性key 代理到 Vue实例上
       defineComputed(vm,key)
    }
}
function defineComputed(vm, key) {
    // 将计算属性代理到 Vue实例上， 就可以通过vm.xxx进行访问
    Object.defineProperty(vm,key,{
        get: function() {
            // 缓存原理
            const watcher = vm._watcher[key]
            if(watcher.dirty) {
                // 当前computed回调函数在本次渲染周期内没有执行过
                // 执行 evaluate，通知watcher 执行computed回调函数，得到回调函数的返回值
                watcher.evaluate()
            }
            return watcher.value
        },
        set: function() {
            console.log('no setter: nanjiu')
        }
    })
}

function initWatch(vm) {}
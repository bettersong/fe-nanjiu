var uid = 0
import {parsePath} from "../util/index"
import Dep from "./dep"
export default class Watcher{
    constructor(vm,expr,cb,options){
        this.vm = vm // 组件实例
        this.expr = expr // 需要观察的表达式
        this.cb = cb // 当被观察的表达式发生变化时的回调函数
        this.id = uid++ // 观察者实例对象的唯一标识
        this.options = options // 观察者选项
        this.lazy = !!options.lazy // 为computed 设计的
        this.dirty = this.lazy // 计算属性实现缓存的本质
        // 如果是非懒执行，则直接执行cb
        this.getter = parsePath(expr)
        // watcher的回调执行结果
        this.value = this.options.lazy ? undefined : this.get()
        // this.value = this.get()
    }

    get(){
        //负责执行watcher的回调，执行时进行依赖收集
        // 依赖收集,把全局的Dep.target设置为Watcher本身
        Dep.target = this
        this.cb().call(this.vm)
        const obj = this.vm
        let val
        // 只要能找就一直找
        try{
            val = this.getter(obj)
        } finally{
            // 依赖收集完需要将Dep.target设为null，防止后面重复添加依赖。
            Dep.target = null
        }
        return val
        
    }
    evaluate() {
      if (this.dirty) {
        // 执行get，触发计算函数的执行
        this.value = this.get()
        // 将dirty置为false，实现一次刷新周期内computed计算属性只执行一次，从而实现缓存效果
        this.dirty = false
      }
      return this.value
    }
    // 当依赖发生变化时，触发更新
    update() {
        if(this.lazy) {
            // 懒执行会走这里, 比如computed
            this.dirty = true
        }else if(this.sync) {
            // 同步执行会走这里，比如this.$watch() 或watch选项，传递一个sync配置{sync: true}
            this.run()
        }else {
            // 将当前watcher放入watcher队列， 一般都是走这里
            queueWatcher(this)
        }
        
    }
    run() {
        this.getAndInvoke(this.cb)
    }
    getAndInvoke(cb) {
        let val = this.get()

        if(val !== this.value || typeof val == 'object') {
            const oldVal = this.value
            this.value = val
            cb.call(this.target,val, oldVal)
            // 将dirty 置为true，当组件更新时，重新执行updateComponent 方法，进而执行render函数
            // 生成组件新的vnode,patch 更新阶段，将vnode 变成真实的dom节点
            this.dirty = true
        }
    }
}
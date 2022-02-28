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
        this.getter = parsePath(expr)
        this.value = this.get()
    }

    get(){
        // 依赖收集,把全局的Dep.target设置为Watcher本身
        Dep.target = this
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
    // 当依赖发生变化时，触发更新
    update() {
        this.run()
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
        }
    }
}
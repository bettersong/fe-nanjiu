// 把data中数据使用Object.defineProperty重新定义 es5
// Object.defineProperty 不能兼容IE8及以下，所以vue2无法兼容IE8版本
import {isObject,def} from "../util/index"
import {arrayMethods} from "./array.js"
import Dep from "./dep"
export function observe (data) {
    // console.log(data,'observe')
    let isObj = isObject(data)
    if(!isObj) return 
    return new Observer(data) // 观测数据
}

 class Observer {
     constructor(v){
         // 每一个Observer实例身上都有一个Dep实例
         this.dep = new Dep()
        // 如果数据层次过多，需要递归去解析对象中的属性，依次增加set和get方法
        def(v,'__ob__',this)  //给数据挂上__ob__属性，表明已观测
        if(Array.isArray(v)) {
            // 把重写的数组方法重新挂在数组原型上
            v.__proto__ = arrayMethods
            // 如果数组里放的是对象，再进行监测
            this.observerArray(v)
        }else{
            // 非数组就直接调用defineReactive将数据定义成响应式对象
            this.walk(v)
        }
        
     }
     observerArray(value) {
         for(let i=0; i<value.length;i++) {
             observe(value[i])
         }
     }
     walk(data) {
         let keys = Object.keys(data); //获取对象key
         keys.forEach(key => {
            defineReactive(data,key,data[key]) // 定义响应式对象
         })
     }
 }

 function  defineReactive(data,key,value){
     const dep = new Dep() //实例化dep,用于收集依赖，通知订阅者更新
     observe(value) // 递归实现深度监测，注意性能
     Object.defineProperty(data,key,{
         configurable:true,
         enumerable:true,
         get(){
             //获取值
             // 如果现在处于依赖的手机阶段
             if(Dep.target) {
                 dep.depend()
             }
            //  依赖收集
            return value
         },
         set(newV) {
             //设置值
            if(newV === value) return
            observe(newV) //继续劫持newV,用户有可能设置的新值还是一个对象
            value = newV
            console.log('值变化了:',value)
            // 发布订阅模式，通知
            dep.notify()
            // cb() //订阅者收到消息回调
         }
     })
 }
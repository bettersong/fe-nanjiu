
// 重写数组的7个方法： push,pop,shift,unshift,reverse,sort,splice会导致数组本身改变

let oldArrayMethods = Array.prototype
// value.__proto__ = arrayMethods 
// arrayMethods.__proto__ = oldArrayMethods
export let arrayMethods = Object.create(oldArrayMethods)

const methods = [
    'push','pop','shift','unshift','reverse','sort','splice'
]

methods.forEach(method=>{
    arrayMethods[method] = function(...args) {
        console.log('用户调用了：'+method,args)
        const res = oldArrayMethods[method].apply(this, args) // 调用原生数组方法
        // 添加的元素可能还是一个对象

        let inserted = args //当前插入的元素
        //数组新插入的元素需要重新进行observe才能响应式
        let ob = this.__ob__
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice':
                inserted = args.slice(2)
                break;
            default:
                break;
        }
        if(inserted) {
            ob.observerArray(inserted)  //将新增属性继续
        }

        console.log('数组更新了：'+ JSON.stringify(inserted))
        //通知所有注册的观察者进行响应式处理
        ob.dep.notify() 
        return res
    }
})


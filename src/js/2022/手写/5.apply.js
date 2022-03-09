/**
 * **`apply()`** 方法调用一个具有给定`this`值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
 */

Function.prototype.myApply = function(context) {
    var context = context || window // 获取需要绑定的this
    context.fn = this // 获取需要改变this的函数
    const arg = arguments[1] // 获取传递给函数的参数

    if(!(arg instanceof Array)) {
        throw Error('参数需要是一个数组')
    }
    const res = context.fn(...arg) // 执行函数
    delete context.fn
    return res
}
function say(a,b,c) {
    console.log(this.name,a,b,c)
}
say.myApply({name:'nanjiu'},[1,2,3]) //nanjiu 1 2 3
say.apply({name:'nanjiu'},[1,2,3]) //nanjiu 1 2 3
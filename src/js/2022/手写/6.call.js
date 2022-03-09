/**
 * `call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。
 */

Function.prototype.myCall = function(context) {
    var context = context || window // 获取需要改变的this
    context.fn = this // 获取需要改变this的函数
    const args = [...arguments].slice(1) // 获取参数列表
    const res = context.fn(...args) // 将参数传给函数并执行
    delete context.fn // 删除该方法
    return res // 返回函数返回值
}

function say(a,b,c) {
    console.log(this.name,a,b,c)
}
say.myCall({name:'nanjiu'},1,2,3) //nanjiu 1 2 3
say.call({name:'nanjiu'},1,2,3) //nanjiu 1 2 3
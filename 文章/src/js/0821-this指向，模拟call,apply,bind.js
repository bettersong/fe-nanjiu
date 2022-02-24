
// this指向
var obj = {
    a:function(){
        console.log(this)
        console.log(this.b)
        console.log(this.c)
        console.log(this.a)
    },
    b:2,
    c:3
}
var b = obj.a
b()
// 结果：window,f(){...},undefined,undefined
obj.a()
// 结果：{a:..,b:2,c:3},2,3,f(){...}

/**
 * 解析：
 * b()调用，此时b函数所处的执行环境是全局环境，this指向window
 * obj.a()调用，此时a是作为对象方法进行调用，this指向调用对象obj
 */


// 模拟call
Function.prototype.myCall = function(context){
    // context指的是那个想要借方法的对象，并为它指定默认值，没传就是window
    var context = context || window
    // 将要借用的那个方法绑定在当前要使用该方法的对象的fn属性上
    context.fn = this
    // 这里的this指向你想要借用的那个方法也就是.myCall前面的调用者(这里的this指的是一个函数)
    console.log(this)
    //获取参数，也就是相当于call的参数列表
    var args = [...arguments].slice(1)
    // 将参数传给该函数并执行
    var res = context.fn(...args)
    // 删除该方法
    delete context.fn
    // 返回执行结果
    return res
}
var obj = {
    name: 'zhangsan',
    say: function () {
        console.log(this.name)
    }
}
obj.say()
var obj2 = {name: 'lisi'}
obj.say.myCall(obj2,12)

// 模拟apply
/* 
实现原理与call类似，主要是参数不同，apply接受一个参数数组
*/
Function.prototype.myApply = function (context){
    var context = context || window
    context.fn = this
    // 判断第二个参数是否为数组，不为数组需提示用户(报错提示)
    console.log(arguments.length)
    if(arguments.length > 2){
        throw new Error('只能传递两个参数')
    }else if(!(arguments[1] instanceof Array)){
        throw new Error('第二个参数需要是数组类型')
    }
    var res = context.fn(...arguments[1])
    delete context.fn
    return res
}
var obj3 = {
    name: 'wangwu'
}
obj.say.myApply(obj3,[10])    //

// 模拟bind
/* 
这里的区别是bind返回的是一个函数
*/
Function.prototype.myBind = function(context){
    var context = context || window
    var _this = this
    var args = [...arguments].slice(1)
//    这里返回的是一个函数
    var res = function(){
        return _this.apply(context,...args)
    }
    return res
}
var obj4 = {
    name: 'zhaoliu'
}
obj.say.myBind(obj4)()

// var a = 100
// function test(){
//     var b = a * 2
//     var a = 200
//     var c = a/2
//     console.log(b)
//     console.log(c)
// }
// test()      //NaN 100

// var tt = 'aa'
// function fn(){
//     console.log(tt)   //undefined
//     var tt = 'dd'
//     console.log(tt)   //dd
// }
// fn()

// // 词法作用域,函数作用域在函数被声明时就已经确定了
// var a = 10
// function fun(){
//     console.log(a)
// }

// (function(f){
//     var a = 20
//     f()    //10
// })(fun)

// // 闭包
// var data = []
// for(var i=0; i<3; i++){
//     data[i] = function(){
//         console.log(i)
//     }
// }
// data[0]()   //3
// // console.log(parseInt('aaa'))
// // eval
// var y = 1
// if(function f(){}){
//     y += typeof f
// }
// console.log(y)

// // 作用域，值传递与引用传递
// var num1 = 55
// var num2 = 66
// function fn(num,num1){
//     // 这里函数接收参数实际上相当于在函数内部声明了这些变量
//     // 即：
//     // var num
//     // var num1
//     num = 100
//     num1 = 100
//     num2 = 100
//     console.log(num)   //100
//     console.log(num1)  //100
//     console.log(num2)  //100
// }
// fn(num1,num2)
// console.log(num1)   //55  注意：这里不要以为是100，它找的是全局作用域中的num1，并且num1没有被修改过，在fn函数中修改的num1其实并不是全局的，是它自己内部的，因为它接收num1参数相当于在函数内部声明了num1变量，与全局不是同一个
//console.log(num)   //报错，全局中并没有num变量

console.log('------------------')
/* 
分析：
    1.全局代码变量提升，函数提升：var a
    2.代码自上而下执行
        a=6
        遇到定时器，定时器是异步任务（宏任务），压入宏任务栈
    3.接着往下执行：a = 66,主线程任务执行完
    4.看宏任务栈，执行该回调函数
    5.函数内的变量提升：没有
    代码自上而下执行
    打印a ==>66
*/
// var a = 6;
// setTimeout(function () {
//     console.log(a);//66
//     a = 666;
// }, 1000);
// a = 66

////////////////////////////////////////////////
/* 
    作用域：
        作用域是指程序源代码中定义变量的区域
        作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限
        JavaScript采用词法作用域，也就是静态作用域
    静态作用域：
        静态作用域是指函数的作用域在函数定义的时候就已经决定了
*/
var value = 1
function foo(){
    console.log(value)
}
function bar() {
    var value = 2
    foo()
}
bar()
/* 
    执行结果是什么？
        1
        因为JavaScript采用的是词法作用域，函数的作用域在它被声明的时候就已经确定了
        所以在调用foo函数时，函数自上而下执行，遇到console.log(value)，首先在函数内部寻找变量value，没有找到在往他的父级作用与寻找，也就是全局作用域，找到了是value,所以打印结果是1
*/

var scope = "global scope"
function checkscope(){
    var scope = "local scope"
    function f() {
        return scope
    }
    return f()
}
console.log(checkscope())
/* 
    说说执行结果是什么？
    解析：
    1.全局作用域下的变量提升与函数提升
        var scope, function checkscope(){...}
    2.全局作用域下的代码自上而下执行
        scope = "global scope"
        checkscope()执行checkscope函数
    3.函数的形参赋值没有，函数内部变量提升与函数提升，有
        var scope,function f(){...}
    4.函数自上而下执行
        scope = "local scope"
        return f() 调用f方法 
    5.执行f方法
        return scope   //local scope
    6.最后打因结果  local scope
*/


/* 
    理解：什么是闭包
        1.密闭的容器，类似于set，map容器，存储数据
        2.闭包是一个对象，存放数据的格式：key：value
    形成的条件：
        1.函数嵌套
        2.内部函数引用外部函数的局部变量
    闭包的优点：
        1.延长外部函数局部变量的生命周期
    闭包的缺点：
        1.容易造成内存泄漏
    注意点：
        1.合理地使用闭包
        2.用完闭包要及时清除
*/

// function fun(){
//     var count = 1
//     function fun2(){
//         console.log(count)
//     }
//     fun2()
// }

// fun()

// // 闭包的应用场景
// function fun() {
//     var count = 1
//     return function() {
//         console.log(count)
//     }
// }

// var fun2 = fun()
// // fun2()
// console.log('--------------------------')
// 闭包经典面试题
// function fun(n, o){
//     console.log(o)
//     return {
//         fun: function(m){
//             return fun(m,n)
//         }
//     }
// }
// var a = fun(0)   //undefined  object
// a.fun(1)  // function
// a.fun(2)  // 
// a.fun(3)

// var b = fun(0).fun(1).fun(2).fun(3)   //?
// var c = fun(0).fun(1)

// function fn(){
//     var a = 10
//     return () => {
//         return a
//     }
// }
// // 上面这个函数实际上就已经产生了闭包：函数嵌套，内部函数引用外部函数的局部变量
// console.log(a)   //这样在全局是拿不到fn函数的局部变量的，所以会报错
// var b = fn()
// console.log(b()) //10  通过闭包就能使外部函数访问到内部函数的变量了

var arr = []
for(var i=0;i<3;i++){
    arr[i] = (function(i){
        return function(){
            console.log(i)
        } 
    })(i)
    
}
arr[0]()  // 3
arr[1]()  // 3
arr[2]()  // 3
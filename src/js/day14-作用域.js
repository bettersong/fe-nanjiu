var a = 100
function test(){
    var b = a * 2
    var a = 200
    var c = a/2
    console.log(b)
    console.log(c)
}
test()      //NaN 100

var tt = 'aa'
function fn(){
    console.log(tt)   //undefined
    var tt = 'dd'
    console.log(tt)   //dd
}
fn()

// 词法作用域,函数作用域在函数被声明时就已经确定了
var a = 10
function fun(){
    console.log(a)
}

(function(f){
    var a = 20
    f()    //10
})(fun)

// 闭包
var data = []
for(var i=0; i<3; i++){
    data[i] = function(){
        console.log(i)
    }
}
data[0]()   //3
// console.log(parseInt('aaa'))
// eval
var y = 1
if(function f(){}){
    y += typeof f
}
console.log(y)

// 作用域，值传递与引用传递
var num1 = 55
var num2 = 66
function fn(num,num1){
    // 这里函数接收参数实际上相当于在函数内部声明了这些变量
    // 即：
    // var num
    // var num1
    num = 100
    num1 = 100
    num2 = 100
    console.log(num)   //100
    console.log(num1)  //100
    console.log(num2)  //100
}
fn(num1,num2)
console.log(num1)   //55  注意：这里不要以为是100，它找的是全局作用域中的num1，并且num1没有被修改过，在fn函数中修改的num1其实并不是全局的，是它自己内部的，因为它接收num1参数相当于在函数内部声明了num1变量，与全局不是同一个
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
var a = 6;
setTimeout(function () {
    console.log(a);//66
    a = 666;
}, 1000);
a = 66
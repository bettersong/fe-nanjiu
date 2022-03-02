//1. 检测数组的几种方式

toString.call([])
var arr = []
console.log(arr.constructor)
console.log(Array.isArray(arr))   //true
console.log(toString.call(arr))
console.log(arr instanceof Array)   //true


// 2.传统事件绑定与符合w3c标准的事件绑定
// 传统事件绑定
/* 
缺点：1.如果给同一个元素绑定了多次类型相同的事件，那么后面的事件会覆盖掉前面的事件
2.不支持DOM事件流
*/
var btn
// btn.onclick = function(){}
// <div onclick=""></div>

// 符合W3C标准的事件绑定方式addEventListener/attachEvent
/* 
A  非IE
addEventListener('click',function(){},true)
第三个参数：代表是否在捕获阶段执行，默认值是false
1.如果说给同一个元素绑定了多次想同类型的事件，所有绑定的事件会依次触发并不会覆盖
2.支持DOM事件流
3.进行事件绑定不需要on前缀
B  IE浏览器
ie9开始   ：addEventListener
ie8及之前： attachEvent/detachEvent
1.这种方式只支持事件冒泡，不支持事件捕获
2.事件类型需要加on前缀
*/


// 3.IE和标准下有哪些兼容性写法
//var ev = ev || window.event    //获取触发事件的对象
//var target = ev.srcElement || ev.target    //获取时间的源对象
//document.documentElement.clientWidth || document.body.clientWidth//获取屏幕宽度


// 4.call 和 apply 的区别
/* 
相同点：都是为了借用一个本不属于一个对象的方法，让这个对象也能够去执行
toString.call([],1,2,3)
toString.apply([],[1,2,3])
区别：call第二个参数开始接受一个参数列表
      apply第二个参数开始接受一个参数数组

*/
toString.call([], 1, 2, 3)
toString.apply([], [1, 2, 3])


// 5.JavaScript如何实现继承
/* 
原型链继承，借用构造函数继承，原型+构造函数继承
*/
// 原型链继承
function Animal(){
    this.age = 20
}
function Cat(){
    this.name = 'jacy'
}
Cat.prototype = new Animal() //这一步让Cat对象拥有了Animal对象的属性和方法
var cat = new Cat()
console.log(cat.name)
console.log(cat.age)
// 借用构造函数继承
function Ani(){
    this.age = 20
}
function Dog(){
    Animal.call(this)
    this.name = 'dog'
}
var dog = new Dog()
console.log(dog.name)
console.log(dog.age)


// 引用变量赋值传递
var obj = {n: 3}
// obj = {n: 4}
function fn(a){
    a = {n: 4}
}
fn(obj)
console.log(obj.n)
// 百度真题
var a = {n: 1}
var b = a
a.x = a = {x: 2}
console.log(a.n, b.n)    //undefined   1
console.log(a.x, b.x)   //2   {x: 2}

// 词法作用域
// 腾讯真题
var x = 10
function fn(){
    console.log(x)
}
function show(f){
    var x = 20
    f()
}
show(fn)    //10

// 美团真题
var fn = function (){
    console.log(fn)
}
fn()
// var obj = {
//     fn2: function(){
//         console.log(fn2)
//     }
// }
// obj.fn2()

// 阿里真题
/* 
函数提升到最前面，接着才是变量提升，所以这里变量c会将函数c覆盖掉
*/
var c = 1
// function c(c) {
//     console.log(c)
//     var c = 3
// }
console.log(c)

// 腾讯
var name = 'world';
(function(){
    if(typeof name === 'undefined'){
        var name = 'jack'
        console.log(name)    //jack
    }
})()

// 百度
var A = function(){}
A.prototype.n = 1
var b = new A()
A.prototype = {
    n:2,
    m:3
}
var c = new A()
console.log(b.n,b.m,c.n,c.m)

// 京东
var F = function() {}
Object.prototype.a = function(){
    console.log('a')
}
Function.prototype.b = function(){
    console.log('b')
}
var f = new F()   //f不是一个函数，它是一个实例对象
console.log(typeof F)    //function
console.log(typeof f)    //object
F.a()  //'a'
F.b()  //'b'
f.a()  //'a'
// f.b()  //报错
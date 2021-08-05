/* 
    函数参数可以分为形参和实参
    arguments是指函数内部的参数集合：包含了所有实参和length，callee属性
*/
function fn(a,b){
    // 这里的a,b就是函数的形参
    console.log(a)   //1
    console.log(b)   //undefined
    console.log(arguments) //[Arguments] { '0': 1 }
    /* 
        arguments参数集合的内容只和实参有关，与形参无关
    */
    console.log(arguments[0])  // 1
    arguments[0] = 2
    console.log(a)   //2
    // 形参变量与arguments存在映射机制，在函数执行后形参赋值的一瞬间，能建立映射关系的建立映射关系，不能建立的以后也不能建立映射关系，如下面的b，即使你再函数内又为他赋了值，它与arguments也是不会在建立映射关系的
    b = 20
    console.log(b)  //20
    console.log(arguments[1])  //undefined
    console.log(arguments.callee)  //[Function: fn]  指向函数本身
    console.log(arguments.length)   //1 实参个数
    console.log(this.name)
}
//fn(1)  //这里的1就是实参
const obj = {
    name:'zhangsan'
}
// fn.call(obj,1,2,3)
const res = fn.bind(obj,1,2)();
console.log(res)
// (function(){
//     console.log(1111)
// }())
// (function(){
//     console.log(this,2222)
// })()
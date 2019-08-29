

// 异步编程的几种方案

// 1.回调函数
/* 
    回调函数的优点是简单，容易部署，缺点是不利于代码的阅读和维护
*/
function fn(callback){
    console.log(1)
    setTimeout(() => {
        callback()
    })
    console.log(3)
}
function fn2(){
    console.log(2)
}
fn(fn2)
/* 
    执行结果是：1,3,2
*/

// 2.事件监听
/* 
   思想：任务的执行不取决于代码的顺序，而取决于某个事件是否执行
*/

// 3.发布-订阅模式

// 4.Promise
var p = new Promise((resovled,reject) => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 1000);
    resovled()
})

p.then(() => {
    console.log(3)
}).catch(() => {
    console.log(4)
})

// 执行顺序：1  3   2
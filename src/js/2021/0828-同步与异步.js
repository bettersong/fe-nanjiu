/* 
    同步意味着每一个操作必须等待前一个操作完成后才能执行
    异步意味着错做不需要等待其他操作完成后才开始执行
    在JS中，由于单线程的特性导致所有代码都是同步的。但是，有些一步操作（例如：XMLHttpRequest或setTimeout等）并不是有主线程进行处理的。
    所谓单线程，是指在JS引擎中负责解释和执行JS代码的线程只有一个，他就是主线程
    但实际上还存在一些其他的线程，例如处理ajax请求的线程，处理dom事件的线程，定时器线程，读写文件线程等，
    这些线程可能存在于JS引擎之内，也可能存在于JS引擎之外，我们可以叫他工作线程

    工作线程在异步操作完成后需要通知主线程，这个通知机制是利用消息队列和事件循环实现的
*/

// 异步编程的几种方案
// 1.回调函数
/* 
    回调函数的优点是简单，容易部署，缺点是不利于代码的阅读和维护
*/
// function fn(callback){
//     console.log(1)
//     setTimeout(() => {
//         callback()
//     })
//     console.log(3)
// }
// function fn2(){
//     console.log(2)
// }
// fn(fn2)
/* 
    执行结果是：1,3,2
*/

// 2.事件监听
/* 
   思想：任务的执行不取决于代码的顺序，而取决于某个事件是否执行
*/

// 3.发布-订阅模式

// 4.Promise
// var p = new Promise((resovled,reject) => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//     }, 1000);
//     resovled()
// })

// p.then(() => {
//     console.log(3)
// }).catch(() => {
//     console.log(4)
// })

// 执行顺序：1  3   2

// async await
function fn() {
    return new Promise((resolve, reject) => {
        console.log(0)
        setTimeout(() => {
            console.log(1)
            resolve()
        },2000)
    })
}

async function main() {
    const res = await fn()
    console.log(2)
    console.log(res)
}
main()
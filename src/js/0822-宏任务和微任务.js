/*
js是一门单线程语言
宏任务：
分类：setTimeout setInterval requrestAnimation
1.宏任务所处的队列就是宏任务队列
2.第一个宏任务队列中只有一个任务：执行主线程的js代码
3.宏任务队列可以有多个
4.当第一个宏任务队列中的任务全部执行完后会查看是否有微任务队列，如果有先执行微任务中的所有任务，如果没有就查看是否有宏任务队列
微任务：
分类：new Promise().then(回调) process.nextTick()
1.微任务所处的队列就是微任务队列
2.只有一个微任务队列
3.在第一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务
*/

console.log('-------------start--------------') //

// 宏任务
setTimeout(() => {
console.log('setTimeout')
}, 0);
new Promise((resolve,reject)=>{
for(var i=0;i< 5 ;i++){ console.log(i) } resolve() }).then(()=> {
    console.log('promise实例成功回调')
    })

    console.log('------------end----------------')
    setTimeout(_ => console.log(4))

    new Promise(resolve => {
    resolve()
    console.log(1)
    }).then(_ => {
    console.log(3)
    })

    console.log(2)
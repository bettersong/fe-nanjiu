/*
js是一门单线程语言
宏任务：
分类：setTimeout setInterval requrestAnimation
1.宏任务所处的队列就是宏任务队列
2.第一个宏任务队列中只有一个任务：执行主线程的js代码
3.宏任务队列可以有多个
4.当第一个宏任务队列中的任务全部执行完后会查看是否有微任务队列，
如果有先执行微任务中的所有任务，如果没有就查看是否有宏任务队列
微任务：
分类：new Promise().then(回调) process.nextTick()
1.微任务所处的队列就是微任务队列
2.只有一个微任务队列
3.在第一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务
*/
(async ()=>{
    console.log(1) 
    // 1,4,5,2,6,3,7,setTimeout1,setTimeout2
    // 宏任务
    setTimeout(() => {
    console.log('setTimeout1')
    }, 0);
    function foo (){
        return new Promise((res,rej) => {
            console.log(2)
            res(3)
        })
    }
    new Promise((resolve,reject)=>{
    console.log(4)
    resolve() 
    console.log(5)
    }).then(()=> {
    console.log('6')
    })
    const res = await foo();
    console.log(res);
    console.log('7')
    setTimeout(_ => console.log('setTimeout2'))
})()

setTimeout(()=>{
    console.log(1)
},0)

console.log(2)
    
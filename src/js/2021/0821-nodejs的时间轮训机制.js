// 面试题：nodeJS的事件轮询机制

setTimeout(() => {
   console.log('setTimeout')
}, 0);

setImmediate(function(){
    console.log('setImmediate')
})

process.nextTick(function(){
    console.log('process.nextTick()')
})

/* 
事件执行顺序：（与函数位置没有关系）
process.nextTick()
setTimeout
setImmediate

nodeJS事件轮询机制：借助libuv库实现的
概括为6个阶段：
1.times定时器阶段
    计时和执行到点的定时器回调函数
2.pending callback
    某些系统操作的回调函数（例如TCP错误类型）
3.idle prepare
    准备工作
4.poll 轮询阶段（轮询队列）
    如果轮询队列不为空，依次同步取出轮询队列中的第一个回调函数执行，直到轮询队列为空或者达到系统最大限制
    如果轮询阶段为空
        如果之前设置过setTmmediate函数，在当前poll阶段等待，直到轮询队列添加回调函数，就去第一个阶段执行
5.check  查阶段
    执行setTmmediate设置的回调函数
6.close callbacks 关闭阶段
    执行close事件回调函数
*/
/**
 * 节流
 * 如果事件持续触发，在指定时间内，只执行一次事件
 */

// 时间戳方式
//使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
//如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
// function throttle(callback, wait) {
//     let start = 0
//     return function(...args) {
//         const now = +new Date()
//         if(now-start >= wait ) {
//             callback.call(this,args)
//             start = now
//         }
        
//     }
// }

// 定时器方式
/**
 * 
 * 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，
 * 直到定时器执行，然后执行函数，清空定时器。
 */
function throttle(callback, wait) {
    let timer
    return function(...args) {
        if(!timer) {
            timer = setTimeout(()=>{
                timer = null
                callback.call(this,args)
            },wait)
        }
    }
}

const cb = throttle(function(e){
    console.log(this)
},1000)
document.body.addEventListener('mousemove',()=>{
    cb.call({name:'南玖'})
},1000)
// {name: '南玖'}
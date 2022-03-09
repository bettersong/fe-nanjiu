/**
 * 防抖
 * 事件高频触发后，n秒内函数只会执行一次，若n秒内事件再次触发，则重新计时，
 * 总之就是要等触发完事件 n 秒内不再触发事件，函数才执行
 */
function debounce(callback, wait) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.call(this,args)
        },wait)
    }
}

// document.body.addEventListener('mousemove',(e) => {
//     console.log('mousemove')
// })
document.body.addEventListener('mousemove',debounce((e)=>{
    console.log(this,e,'mousemove-debounce')
},1000))
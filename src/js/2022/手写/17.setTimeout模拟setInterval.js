
function mySetInterval(callback, delay) {
    let timer = null
    let interval = () => {
        timer = setTimeout(()=>{
            callback()
            interval() // 递归
        }, delay)
    }
    interval() // 先执行一次
    return {
        id: timer,
        clear: () => {
            clearTimeout(timer)
        }
    }
}

let time = mySetInterval(()=>{
    console.log(1)
},1000)
setTimeout(()=>{
    time.clear()
},2000)
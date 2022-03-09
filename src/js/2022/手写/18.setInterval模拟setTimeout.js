
function mySetTimeout(callback, delay) {
    let timer = null
    timer = setInterval(()=>{
        callback()
        clearInterval(timer)
    },delay)
}

mySetTimeout(()=>{
    console.log(1)
},1000)
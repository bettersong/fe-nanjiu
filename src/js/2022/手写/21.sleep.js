

function sleep(func, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(func())
        }, delay)
    })
}

function say(name) {
    console.log(name)
}
async function go() {
    await sleep(()=>say('nanjiu'),1000) //过一秒打印nanjiu
    await sleep(()=>say('前端南玖'),2000) // 再过两秒打印前端南玖
}
go()

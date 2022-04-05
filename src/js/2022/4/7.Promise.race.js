
/**
 * 实现一下Promise.race
 * 返回最先改变状态的那个promise的返回值
 */

Promise.myRace = function(promises) {

    return new Promise((resolved, rejected) => {
        [].forEach.call(promises, promise => {
            promise.then(res => {
                resolved(res)
            },error => {
                rejected(error)
            })
        })
    })
}

const timeout = function(time) {
    return new Promise((resolve, reject) => {
        return setTimeout(resolve, time);
    })
}

const res = Promise.myRace([timeout(200), timeout(400), timeout(300)])
console.log(res)
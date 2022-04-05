

/**
 * 实现Promise.all
 * 它接受一个数组/类数组为参数，当数组内的所有Promise状态都变为resolved，它才返回resolved，
 * 否则返回rejected
 */

Promise.myAll = function (promises) {
    const resArr = []  // 返回值
    return new Promise((resolved, rejected) => {
        for(let i=0; i<promises.length; i++) {
            promises[i].then(res=> {
                resArr[i] = res
            }, rej => {
             rejected(rej)
            })
        }
        if(resArr.length === promises.length) {
            resolved(resArr)
        }
        
    })
}

let timeout = (time,type) => {
    return new Promise((resolve,reject)=>setTimeout(resolve,time))
}

const res = Promise.myAll([timeout(100,1),timeout(300,1),timeout(400,2)])
console.log('myAll', res)
const res2 = Promise.all([timeout(100,1),timeout(300,2),timeout(400,1)])
console.log('all', res2)

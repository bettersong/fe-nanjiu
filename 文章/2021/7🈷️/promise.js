
// const res = new Promise((resolve,reject)=>{
//     resolve('s')
// })
// res.then((res,rej)=>{
//     console.log(res,1)
//     return Promise.reject('err')
// }).catch(res=>{
//     console.log(res,2)
// })
// console.log('promise',res)
class myPromise {
    static PENDING = 'pending'
    static FULFILLEd = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(init){
        this.state = myPromise.PENDING // promise状态
        this.promiseRes = null  // promise返回值
        this.resolveCallback = [] //成功回调集合
        this.rejectCallback = [] //失败回调集合
        const resolve = result=>{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.FULFILLEd //改变状态
                this.promiseRes = result //返回值
                //依次调用成功回调
                this.resolveCallback.forEach(fn=>fn())
            }
        }
        const reject = result=>{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.REJECTED //改变状态
                this.promiseRes = result //返回值
                // 依次调用失败回调
                this.rejectCallback.forEach(fn=>fn())
            }
        }
        try{
            init(resolve,reject)  // 注意this指向
        }catch(err){
            reject(err)
        }
        
    }
    then(onFulfilled,onRejected){
        const {promiseRes,state} = this
        let promise = new myPromise((reso,reje)=>{
            const resolveMyPromise = promiseRes => {
                try{
                    if(typeof onFulfilled !== 'function'){
                        // 如果then的第一个回调不是一个函数，直接忽略，返回一个新的promise
                        reso(promiseRes)
                    }else{
                        // 获取第一个回调的执行结果
                        const res = onFulfilled(promiseRes)
                        // 看该执行结果是否是一个promise
                        if(res instanceof myPromise){
                            // 是一个promise,等它状态改变后再改变then返回的promise状态
                            res.then(reso,rej) 
                        }else{
                            // 不是一个promise，将它作为新的promise的resolve
                            reso(res)
                        }
                    }
                }catch(err){
                    //异常，直接将新的promise状态置为rejected
                    reje(err)
                }
            }
            const rejectMyPromise = promiseRes => {
                try{
                    if(typeof onRejected !== 'function'){
                        // 如果then的第二个回调不是一个函数，直接忽略，返回一个新的promise
                        reje(promiseRes)
                    }else{
                        // 获取第二个回调的执行结果
                        const res = onRejected(promiseRes)
                        // 看该执行结果是否是一个promise
                        if(res instanceof myPromise){
                            // 是一个promise,等它状态改变后再改变then返回的promise状态
                            res.then(reso,rej) 
                        }else{
                            // 不是一个promise，将它作为新的promise的resolve
                            reje(res)
                        }
                    }
                    
                }catch(err){
                    //异常，直接将新的promise状态置为rejected
                    reje(err)
                }
            }
            if(state === myPromise.FULFILLEd) {
                resolveMyPromise(promiseRes)
            }
            if(state === myPromise.REJECTED) {
                rejectMyPromise(promiseRes)
            }
            if(state === myPromise.PENDING){
                if(onFulfilled && typeof onFulfilled === 'function'){
                    this.resolveCallback.push(()=>
                    // 这里我们用setTimeout来模拟实现then的微任务
                    setTimeout(()=>{
                        resolveMyPromise(this.promiseRes)
                    },0)
                    )
                }
                if(onRejected && typeof onRejected === 'function'){
                    this.rejectCallback.push(()=>
                    // 这里我们用setTimeout来模拟实现then的微任务
                    setTimeout(()=>{
                        rejectMyPromise(this.promiseRes)
                    },0)
                    )
                }
            }

        })
        return promise
    }
    catch(onRejected) {
        return this.then(undefined,onRejected)
    }
    static all (promises){
        return new myPromise((res,rej)=>{
            let count = 0
            const result = [];
            function addFun(index,resf) {
                result[index]=resf // 这里用索引别用push,保证返回的顺序
                count++
                if(count==promises.length) {
                    res(result)
                }
            }
            [].forEach.call(promises,(promise,index)=>{
                if(promise instanceof myPromise) {
                    promise.then(success=>{
                        addFun(index,success)
                    },err=>{
                        rej(err)
                    })
                }else{
                    addFun(index,promise)
                }
            })
        })
    }
    static race(promises) {
        return new myPromise((res,rej)=>{
            [].forEach.call(promises,promise=>{
                if(promise instanceof myPromise){
                    promise.then(success=>{
                        res(success)
                    },error=>{
                        rej(error)
                    })
                }else{
                    res(promise)
                } 
            })
        })
    }
    static resolve(v){
        //1.参数是一个Promise实例,直接返回
        if(v instanceof myPromise){
            return v
        }
        //2.参数是一个thenable对象，转为Promise后执行该对象的then方法
        if(typeof v === 'object' && typeof v.then === 'function'){
            return new myPromise((res,rej)=>{
                v.then(res,rej)
            })
        }
        //3.没有参数，直接返回一个resolved状态的promise
        if(!v){
            return new myPromise(res=>{
                res()
            })
        }
        //4.参数是一个原始值，返回一个新的Promise，状态为resolved
        return new myPromise(res=>{
            res(v)
        })
    }
    static reject(v){
        return new myPromise((res,rej)=>{
            rej(v)
        })
    }
}

const res1 = new myPromise((res,rej)=>{
    setTimeout(()=>res('myPromise成功啦～'),1000)
    // rej('失败啦～')
})
const res2 = new Promise((res,rej)=>{
    setTimeout(()=>res('promise成功啦'),1000)
})
res1.catch(res=>{
    console.log(res,4)
})
const all = myPromise.race([res1,2]).then(res=>console.log('myPromise.all',res))
const all1 = Promise.race([res2,2]).then(res=>console.log('promise.all',res))
console.log('myPromise.all',all)
console.log('Promise.all',all1)


// myPromise.defer = myPromise.deferred = function(){
//     let dfd = {};
//     dfd.myPromise = new myPromise((resolve, reject)=>{
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }

// module.exports = myPromise

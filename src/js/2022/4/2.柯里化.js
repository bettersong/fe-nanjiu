
/**
 * 实现add(1)(2)(3)
 */

// 函数柯里化(参数长度固定)

function curry(fn, args) {
    const len = fn.length
    let curArg = args || []
    return function() {
        let arr = [].slice.call(arguments)
        arr = [...arr, ...curArg]
        if(arr.length === len) {
            return fn.apply(this, arr)
        }else {
            return curry(fn, arr)
        }
    }
}


const add = curry(function(a,b,c) {
    console.log(a+b+c)
})
add(1,2,3)
add(1)(2)(3)
add(1,2)(3)


// 函数柯里化（参数不固定）
// 基本思路就是看c函数有没有参数，有参数则拼接，没有则执行

function curry2(fn) {
    let args = []
    return function c() {
        let curArg = [].slice.call(arguments)
        if(curArg.length) {
            args = [...args,...curArg,]
            return c
        }else {
            const res = fn.apply(this, args)
            args = []
            return res
        }
    }
}

function fn(...args) {
    return args
}
const fn2 = curry2(fn)
console.log(fn2(1)())
console.log(fn2(1)(2)())
console.log(fn2(1,2,3)(4)(5)())
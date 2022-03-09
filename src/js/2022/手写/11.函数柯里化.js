/**
 * 柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数
 * （最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
 * 
 * 先来理解一下什么是函数柯里化，上面文绉绉的内容可能不是那么容易理解，我们还是直接上代码来理解吧
 */

// 假如有这样一个函数
function add (a,b,c) {
    console.log(a+b+c)
}
add(1,2,3) //6
/**
 * 我们希望可以通过add(1,2)(3)或add(1)(2)(3)或add(1)(2,3)这样调用也能够得倒正确的计算结果
 */

function curry(fn, curArgs) {
    const len = fn.length  // 需要柯里化函数的参数个数
    curArgs = curArgs || []

    return function() {
        let args = [].slice.call(arguments) // 获取参数
        args = curArgs.concat(args) //拼接参数
        // 基本思想就是当拼接完的参数个数与原函数参数个数相等才执行这个函数，否则就递归拼接参数
        if(args.length < len) {
            return curry(fn, args)
        }else{
            return fn.apply(this, args)
        }
    }
}

let fn = curry(function(a,b,c){
    console.log([a,b,c])
})
fn(1,2,3) // [ 1, 2, 3 ]
fn(1,2)(3) // [ 1, 2, 3 ]
fn(1)(2,3) // [ 1, 2, 3 ]
fn(1)(2)(3) // [ 1, 2, 3 ]
/* 
    什么是函数柯里化？
        函数柯里化是把接收多个参数的函数变换成接收一个单一参数（最初函数的第一个参数）的函数，并且返回接收余下的参数而且返回结果的新函数的技术。
    作用：
        1.参数复用
        2.提前返回 - 返回接收余下的参数且返回结果的新函数
        3.延迟执行 - 返回新函数，等待执行
*/
const curry = (fn, ...args) => {
    args.length < fn.length 
       ? (...arguments) => curry(fn, ...args,...arguments)
       : fn(...args)
}

function add(a,b){
    
    return a + b
}

let sum = curry(add)
console.log(sum(1)(2))
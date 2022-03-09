
//暴力递归
// function fib(n) {
//     if(n == 0) return 0
//     if(n == 1 || n == 2) return 1
//     return fib(n-1) + fib(n-2)
// }

// // console.log(fib(4)) //F(4)=F(3)+F(2)=F(2)+F(1)+F(2)=1+1+1=3
// let t = +new Date()
// console.log(fib(40)) //102334155
// console.log(+new Date()-t) //783ms

//缓存优化
function fib2(n) {
    if(fib2[n] !== undefined) return fib2[n]
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1

    const res = fib2(n-1) + fib2(n-2)
    fib2[n] = res
    return res
}
let t1 = +new Date()
console.log(fib2(40)) //102334155
console.log(+new Date()-t1)  //5ms

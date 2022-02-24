// /* 
//     数组API填坑，最近遇到一个问题，发现有些数组API会忽略空值
//     主要是：forEach,filter,some,every这些会直接跳过空位，map会跳过空位，但会会保留这个空位
// */
// function map(arr){
//     return arr.map(item => {
//         return item + 1
//     })
// }
// let arr = [1,2,3,,4,,6]
// arr = arr.map(item => {
//    return item + 1
// })
// console.log(arr) //[ 2, 3, 4, <1 empty item>, 5, <1 empty item>, 7 ]
// // 这里并不会将空位去加1，而是直接略过了空位

// let arr2 = [1,2,'',3,'',4]
// arr2 = arr2.map(item => {
//     return item +1
// })
// console.log(arr2) //[ 2, 3, '1', 4, '1', 5 ]
// console.log(map([1, 2, 3, null, 3, null]))//[2, 3, 4, 1, 4, 1]
// /* 
//     注意空字符串是不会忽略的,null也是不会忽略的，只有什么都不填（空位）才会忽略
// */
// /* 
//     看看还有哪些API会忽略空位
// */
// let arr3 = [1,2,,3,4,,5]
// arr3.forEach(item => {
//     console.log(item)  //1,2,3,4,5
// })
// var arr4 = arr3.filter(item => {
//     return item
// }) 
// console.log(arr4) //[ 1, 2, 3, 4, 5 ]  直接忽略了空位
// var arr4 = arr3.every(item => {
//     return item > 0
// })
// console.log(arr4)  //true   直接忽略了空位
// var arr5 = arr3.some(item => {
//     return item > 6
// })
// console.log(arr5)   //false

// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('123')
//     }, 1000);
// })

// promise.then(res=>{
//     console.log(res)    //123
// }).catch(err=>{
//     console.log(err)
// })

// ? forEach中写return能打断吗？
// ! 不能

let arr = [1,2,3,4]
arr.forEach(item => {
    return
    console.log(666,item)
})
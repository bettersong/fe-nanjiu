/**
 * map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
 */

Array.prototype.myMap = function(callback, context) {
    const arr = this,res = []
    const len = arr.length || 0
    let index = 0
    while(index < len) {
        res.push(callback.call(context, arr[index], index))
        index ++
    }
    return res
}
const arr = [1,2,3]
let res1 = arr.map((item,index) => {
    return `k:${index}-v:${item}`
})
let res2 = arr.myMap((item,index) => {
    return `k:${index}-v:${item}`
})
console.log(res1) // [ 'k:0-v:1', 'k:1-v:2', 'k:2-v:3' ]
console.log(res2) // [ 'k:0-v:1', 'k:1-v:2', 'k:2-v:3' ]
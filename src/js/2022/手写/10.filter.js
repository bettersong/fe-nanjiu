/**
 * `filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
 */

Array.prototype.myFilter = function(callback, context) {
    const arr = this,res = []
    const len = arr.length
    let index = 0
    while(index < len) {
        if(callback.call(context,arr[index],index)) {
            res.push(arr[index])
        }
        index ++   
    }
    return res
}
const arr = [1,2,3]
let res1 = arr.filter((item,index) => {
    return item<3
})
let res2 = arr.myFilter((item,index) => {
    return item<3
})

console.log(res1) // [ 1, 2 ]
console.log(res2) // [ 1, 2 ]
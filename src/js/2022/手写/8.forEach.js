
/**
 * `forEach()` 方法对数组的每个元素执行一次给定的函数，无返回值。
 */

Array.prototype.myForEach = function(callback, context) {
    const arr = this // 获取调用的数组
    const len = arr.length || 0

    let index = 0  // 数组下标
    while(index < len) {
        callback.call(context ,arr[index], index)
        index++
    }
}

let arr = [1,2,3]
arr.forEach((item,index) => {
    console.log(`key: ${index} - item: ${item}`)
})
console.log('----------')
arr.myForEach((item,index) => {
    console.log(`key: ${index} - item: ${item}`)
})
/**
 * key: 0 - item: 1
key: 1 - item: 2
key: 2 - item: 3
----------
key: 0 - item: 1
key: 1 - item: 2
key: 2 - item: 3
 */
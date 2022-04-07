

/**
 * 数组结构转对象
 */
function arrayToObject(arr) {
    const obj = {}
    for(let key in arr) {
        // console.log(key)
        obj[key] = arr[key]
    }
    return obj
}

console.log(arrayToObject([1,2,3,4]))
console.log(Object.assign({}, [1,2,3,4,5]))
/**
 * 在拷贝的时候判断一下属性值的类型，如果是对象，递归调用深拷贝函数
 */

function deepClone(obj, cache=new Map()) {
    // 基本数据类型直接返回
    if(typeof obj !== 'object' || obj === null) return obj
    // 防止循环引用
    const cacheTarget = cache.get(obj)
    // 已经存在就直接返回
    if(cacheTarget) return cacheTarget

    let newObj = obj instanceof Array ? [] : {} // 新建一个对象

    cache.set(obj, newObj)
    // 遍历原对象
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObj
}
const obj = {
    name: '南玖'
}
const obj1 = obj
const obj2 = deepClone(obj)
console.log(obj1===obj) //true
console.log(obj2===obj) //false
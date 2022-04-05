
/**
 * 手写深拷贝
 */

function deepClone(obj) {
    const type = typeof obj
    let res, map = new Map()
    if(map.has(obj)) {
        console.log('qq',map.get(obj))
        return map.get(obj)
    }
    if(type !== 'object' || type === null) {
        return obj
    }else{
        res = Array.isArray(obj) ? [] : {}
        for(let key in obj) {
            map.set(key, deepClone(obj[key]))
            res[key] = deepClone(obj[key])
        }
    }
    console.log('map', map)
    return res
}

let obj = {
    name: '南玖',
    age: 18,
    arr: [1,2,3,4],
    s: {
        age:1
    }
}
console.time('time')
// console.log(deepClone(obj))
const newobj = deepClone(obj)
console.timeEnd('time')
obj.name = 'ssss'
console.log(newobj)

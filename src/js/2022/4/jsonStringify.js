/**
 * 实现一个类似JSON.stringify的功能
 */

function jsonStringify(target) {
    const type = typeof target
    if(type === 'string') {
        return `"${target}"`
    }else if(type === 'number' || type === 'boolean') {
        return target + ''
    }
    else if(type === 'undefined'){
        return 'null'
    }
    else if(type === 'object') {
        if(target === null) {
            return 'null'
        }else if(Array.isArray(target)) {
            return `[${target.map(v => jsonStringify(v))}]`
        }else{
            const entriesArr = Object.entries(target)
            const map = entriesArr.map(([k, v]) => {
                return `"${k}":${jsonStringify(v)}`
            })
            return `{${map.join(',')}}`
        }
    }
}

const obj = {
    a:1,
    b: null,
    c: [1,true,'s',undefined],
    d:{a:2,c:4}
}
const b = true
console.log(jsonStringify(obj),'jsonStringify') // {"a":1,"b":null,"c":[1,true,"s",null],"d":{"a":2,"c":4}} jsonStringify
console.log(JSON.stringify(obj), 'JSON.stringify') // {"a":1,"b":null,"c":[1,true,"s",null],"d":{"a":2,"c":4}} JSON.stringify
console.log(jsonStringify(obj) === JSON.stringify(obj)) // true
export function isObject(data){
    return !(typeof data !== 'object' && data !== null)
}

export function def(data,key,value){
    Object.defineProperty(data,key,{
        enumerable:false,
        configurable:false,
        value
    })
}

export function parsePath(str) {
    const segments = str.split('.')
    return (obj) => {
        for(let i=0; i<segments.length; i++) {
            if(!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}
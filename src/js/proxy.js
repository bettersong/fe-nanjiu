let obj = {
    name: 'zhangsan',
    age:20
}

obj = new Proxy(obj,{
    set() {
        return 1
    },
    get(obj,x) {
       return obj[x] + '1'
    }
})

console.log(obj.name)
/* 基本语法：
Object.defineProperty(obj:劫持对象,prop:对象属性,desc:属性和方法)
let obj = {a:1}
Object.defineProperty(obj,'a',{
    value:'ss', //value值
    configurable: true, //对象属性是否允许删除，以及除value，writeable特性外的其它特性是否可以修改
    writeable: true, // 对象属性是否允许修改
    enumerable: true, // 对象属性是否允许枚举 for(...in),Object.keys()
})

**/

/* defineProperty 添加的属性默认是不可枚举的，并且默认不可变
    可以通过writeable,configurable,enumerable来修改
*/

const obj = {name:'zhangsan'}
console.log('1',obj)
Object.defineProperty(obj,'age',{
    value:21,
})
console.log('2',obj)  //这里打印出什么？ {name:'zhangsan'}
obj.age = 18

console.log('3',obj.age)  // 21   

console.log('4',obj) // {name:'zhangsan'}
// 单个劫持
Object.defineProperty(obj,'steps',{
    value:30,
    configurable:true,
    enumerable:true,
    writable: true
})
console.log('5',obj) // {name:'zhangsan',steps:30}

// get,set 不能与value,writable同时定义

Object.defineProperty(obj,'name',{
    get(){
        return this.newName
    },
    set(nv){
        this.newName = nv + '2222sss'
    },
})
obj.name = 'sss'
console.log(obj.name)

console.log('__________________________')

let student = {
    name: 'zs',
    age:18,
    gender:'man'
}

for(key in student){
    console.log(key)
}
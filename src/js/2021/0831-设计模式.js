// 1.工厂模式
function createPer(name,age){
    let obj = new Object()
    obj.name = name
    obj.age = age
    obj.sayName = function(){
        console.log(this.name)
    }
    return obj
}
let person = createPer('小明',20)
console.log(person) //{ name: '小明', age: 20, sayName: [Function] }
console.log(person.name, person.age) //小明 20
person.sayName() //小明

// 2.单例模式
/* 
    单例模式只能实例化一次
    对象字面量只是一种单例，并不是一种单例模式，因为对象字面量不能够实例化
*/
// 单例
const user = {
    name: 'zhangsan',
    age: 20,
    gender: '男',
    sayName: function(){
        console.log(this.name)
    }
}

// 单例模式：能够实例化，且只能实例化一次
var Person = function(name,age){
    this.name = name
    this.age = age
    this.instence = null
}
Person.isPrototypeOf.sayName = function(){
    console.log(this.name)
}
// 获取实例对象
function getInstence(name,age){
    if(!this.instence){
        this.instence = new Person(name,age)
    }
    return this.instence
}

console.log(getInstence('zhangsan', 18)) //Person { name: 'zhangsan', age: 18, instence: null }
console.log(getInstence('lisi', 20)) //Person { name: 'zhangsan', age: 18, instence: null }
/* 
   因为单例模式只能实例化一次，所以上面这两个打印出来都市一样的，第一次调用时，返回的是zhangsan的实例，第二次调用是，lisi的实例其实就是zhangsan的实例
*/


// 3.模块模式
var blockFun = (function(){
    // 创建私有变量
    var name = '张三'
    // 创建私有方法
    function sayName(){
        console.log(name)
    }

    // 返回一个对象包含共有属性和方法
    return {
        publicFun: function(){
            //...
            // 这里可以访问上面的私有变量和私有方法
        }
    }
})()

// 4.构造函数模式

function Animal(name,age){
    this.name = name
    this.age = age
    this.sayName = function (){
        console.log(this.name)
    }
}

let Cat = new Animal('cat',3)
console.log(Cat) //Animal { name: 'cat', age: 3, sayName: [Function] }
console.log(Cat.name, Cat.age) //cat 3
Cat.sayName()  // cat

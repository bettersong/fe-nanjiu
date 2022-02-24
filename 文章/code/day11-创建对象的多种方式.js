
// 1.工厂模式
/* 
缺点：对象无法识别，因为所有的实例都指向同一个原型
*/
function createPerson(name){
    var obj = new Object()
    obj.name = name
    obj.sayName = function(){
        console.log('我是'+this.name)
    }
    return obj
}
var person = createPerson('张三')
console.log(person) //{ name: '张三', sayName: [Function] }
console.log(person.name)    //张三
person.sayName()    //我是张三

// 2.构造函数模式
/* 
优点：能够识别实例的类型
缺点：没创建一个实例，所有的方法都会被创建，这样大大浪费性能
*/
function Person(name,age){
    this.name = name
    this.age = age
    this.sayName = function(){
        console.log('我是'+this.name)
    }
}

var person2 = new Person('zhangsan',18)
console.log(person2) //Person { name: 'zhangsan', age: 18, sayName: [Function] }
console.log(person2.name)   //zhangsan
console.log(person2.age)    //18
person2.sayName()        //我是zhangsan

// 2.1  构造函数优化
/* 
优点：不用每次创建实例都重新创建函数
缺点：封装不彻底
*/
function Person3(name){
    this.name = name
    this.sayName = sayName
}
function sayName(){
    console.log(this.name)
}
var person3 = new Person3('zhangsan')
console.log(person3) //Person3 { name: 'zhangsan', sayName: [Function: sayName] }
console.log(person3.name)   //zhangsan
person3.sayName()  //zhangsan

// 3.原型模式
/* 
优点：方法不会重建
缺点：所有属性和方法都共享，不能初始化参数
*/
function Person4(name){
}
Person4.prototype.name = 'zhangsan'
Person4.prototype.sayName = function(){
    console.log(this.name)
}
var person4 = new Person4
console.log(person4) //Person4 {}
console.log(person4.name)   //zhangsan
person4.sayName()   //zhangsan

// 4.组合模式，构造函数模式与原型模式双剑合璧
/* 
优点：该共享的共享，该私有的私有，这是es5的最好办法
缺点：还是有点封装不完全
*/
function Person5(name){
    this.name = name
}
Person5.prototype = {
    constructor: Person5,
    sayName: function(){
        console.log(this.name)
    }
}
var person5 = new Person5('张三')
console.log(person5) //Person5 { name: '张三' }
console.log(person5.name)  //张三
person5.sayName()   // 张三
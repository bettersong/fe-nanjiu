/* 
    三句话道破原型链：
    1.每个函数（类）天生自带一个属性prototype，属性值是一个对象，里面存储了当前类供实例调用的属性和方法
    2.在浏览器默认给原型开辟的堆内存中有一个constructor属性：存储的是当前类本身（注意：自己开辟的堆内存中默认没有constructor属性，需要自己手动添加）
    3.每个对象都有一个__proto__属性，这个属性指向当前实例所属类的原型（不确定所属类，都指向Object.prototype）
*/

// 构造函数（类）
function Person(name){
    this.name = name
}

// new了一个实例 （对象）
var person = new Person('zhangsan')
console.log(person) //Person { name: 'zhangsan' }
console.log(person.__proto__)  //实例（对象）的原型--->对象
console.log(Person.prototype)  //构造函数（类）的原型 ----->对象
console.log(person.__proto__ === Person.prototype)  //实例的原型与构造函数的原型相等
console.log(person.__proto__.constructor)  //实例原型的构造函数
console.log(person.__proto__.constructor === Person.prototype.constructor)//true 实例原型的构造函数与类的构造函数相等
console.log(Person === Person.prototype.constructor)  //true


console.log('________________________')
console.log(Person.prototype) //
Person.prototype.age = 18
console.log(Person.age) //18
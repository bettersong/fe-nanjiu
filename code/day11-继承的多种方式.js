// 1.原型链继承
/* 
缺点：所有属性被共享，不能通过child1给parent传参
*/
function Parent(name){
    this.name = 'zhangsan'
}
Parent.prototype.sayName = function(){
    console.log(this.name)
}
function Child(name){

}
Child.prototype = new Parent()
var child1 = new Child('zhangsan')
child1.sayName()  //zhangsan

// 2.借用构造函数继承（经典继承）
/* 
优点：可以传递参数
缺点：所有方法都在构造函数中，每次创建实例都会被新建
*/
function Parent1(name){
    this.name = name
    this.sayName = function(){
        console.log(this.name)
    }
}
function Child1(name){
    Parent1.call(this,name)
}
var child2 = new Child1('lisi')
child2.sayName()  //lisi
console.log(child2.name)   //lisi

// 3.组合继承
/* 
原型链继承与经典继承双剑合璧
优点： 融合原型链继承和构造函数的优点， 是 JavaScript 中最常用的继承模式。
*/
function Parent2(name){
    this.name = name
}
Parent2.prototype.sayName = function(){
    console.log(this.name)
}

function Child2(name,age){
    Parent.call(this,name)
    this.age = age
}
Child2.prototype = Parent2.prototype
var child3 = new Child2('wangwu',20)
console.log(child3)  //Parent2 { name: 'zhangsan', age: 20 }
console.log(child3.name,child3.age)  // zhangsan  20
child3.sayName()    //zhangsan

// 4.原型继承

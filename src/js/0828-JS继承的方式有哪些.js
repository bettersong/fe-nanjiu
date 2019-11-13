// 1.原型链继承
/* 
    缺点：所有属性被共享，而且不能传递参数
*/
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.sayName = () =>{
    console.log(this.name)
}
function Man(name){
    
}
Man.prototype = new Person()
Man.prototype.name = 'zhangsan'
var zhangsan = new Man('zhangsan')
console.log(zhangsan.name) //zhangsan

// 构造函数继承（经典继承）
/* 
    优点：可以传递参数
    缺点：所有方法都在构造函数内，每次创建对象都会创建对应的方法，大大浪费内存
*/
function Perent(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    this.sayName = function(){
        console.log(this.name)
    }
}

function Child(name,age,sex){
    Perent.call(this,name,age,sex)
}
let child = new Child('lisi' , 18, '男')
console.log(child)   //Child { name: 'lisi', age: 18, sex: '男', sayName: [Function] }

// 3.组合模式（构造函数 + 原型链）
/* 
    这种方式充分利用了原型链与构造函数各自的优点，是JS中最常用的继承方法

*/
function Animal(name,age){
    this.name = name
    this.age = age
}
Animal.prototype.sayName = function () {
    console.log(this.name)
}
function Cat(name,age,color){
    Animal.call(this,name,age)
    this.color = color
}
Cat.prototype = Animal.prototype  //将Cat的原型指向Animal的原型
Cat.prototype.constructor = Cat   //将Cat的构造函数指向Cat
let cat = new Cat('xiaobai',3,'white')
console.log(cat) //Cat { name: 'xiaobai', age: 3, color: 'white' }
cat.sayName()   //xiaobai

// 4.es6继承方法
class Per {
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
}

class Son extends Per{
    constructor(name,age){
        super(name)
        this.age = age
    }
}
let son = new Son('zhangsan',18)
console.log(son) //Son { name: 'zhangsan', age: 18 }
son.sayName() //zhangsan
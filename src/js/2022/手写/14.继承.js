/**
 * 
 */

/**
 * 1.原型链继承
 */

function Parent1(name, age) {
    this.name = name,
    this.age = age
}
Parent1.prototype.say = function() {
    console.log(this.name)
}
function Child1(name) {
    this.name = name
}
Child1.prototype = new Parent1()
Child1.prototype.constructor = Child1
let child1 = new Child1('南玖',18)
console.log(child1) //Child1 {name: '南玖'}
child1.say() // 南玖

console.log('-----------------')

/**
 * 2.构造函数继承（经典继承）
 * 
 */
function Parent2(age) {
    this.age = age
    this.say = function() {
        console.log(this.name)
    }
}
function Child2(name,age,gender) {
    this.name = name
    Parent2.call(this, age)
    this.gender = gender
}
let child2 = new Child2('南玖', 18, 'boy')
console.log(child2) //Child2 {name: '南玖', age: 18, gender: 'boy'}
child2.say() // 南玖

console.log('---------------')

// 3.组合继承（原型链加构造函数）

function Parent3(age) {
    this.age = age
}
Parent3.prototype.say = function() {
    console.log(this.name)
}
function Child3(name,age,gender) {
    this.name = name
    Parent3.call(this, age)
    this.gender = gender
}

Child3.prototype = new Parent3
Child3.prototype.constructor = Child3
let child3 = new Child3('南玖', 18, 'boy')
console.log(child3) //Child3 {name: '南玖', age: 18, gender: 'boy'}
child2.say() // 南玖

console.log('--------------------')

/**
 * 4.原型式继承
 * 不自定义类型的情况下，临时创建一个构造函数，借助已有的对象作为临时构造函数的原型，然后在此基础实例化对象，并返回。
 * 这种原型式继承，要求必须要有一个对象可以作为另一个对象的基础
   用这种方式创建的对象相当于是传入参数对象的副本
 */
function object(obj) {
    function F(){}
    F.prototype = obj
    return new F()
}
let parent4 = {
    age: 18,
    name: '南玖',
    say() {
        console.log(this.name)
    }
}
let child4 = object(parent4)
console.log(child4) 
/**Child3 {[[Prototype]]: Object
    age: 18
    name: "南玖"
    say: ƒ say()
    [[Prototype]]: Object
    }
*/
child4.say() // 南玖

console.log('-------------------')

/**
 * 5.寄生式继承
 * 寄生式继承与原型式继承紧密相关，与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，
 * 该函数在内部以某种方式来增强对象，最后再返回对象。
 */
 function createAnother(original) {
	var clone = object(original) //通过调用函数创建一个新对象
	clone.say = function(){		// 以某种方式来增强这个对象
		console.log('nanjiu')
	};
	return clone			// 返回这个对象
}

/**
 * 6.寄生组合式继承
 * 前面说过，组合继承是 JavaScript 最常用的继承模式；不过，它也有自己的不足。
 * 组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，
 * 另一次是在子类型构造函数内部。没错，子类型最终会包含超类型对象的全部实例属性，
 * 但我们不得不在调用子类型构造函数时重写这些属性。
 */
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}


function Parent6(age) {
    this.age = age
}
Parent6.prototype.say = function() {
    console.log(this.name)
}
function Child6(name, gender) {
    this.name = name
    this.gender = gender
}

// 使用
prototype(Child6, Parent6);
let child6 = new Child6('nanjiu', 'boy')

console.log(child6) // Child6 {name: 'nanjiu', gender: 'boy'}
child6.say() // nanjiu



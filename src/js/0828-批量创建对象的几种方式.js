// 1.工厂模式
/* 
思路：在工厂函数内创建对象，并返回
*/

function createObj(name,age,sex){
    var obj = new Object()
    obj.name = name
    obj.age = age
    obj.sex = sex
    obj.sayName = function(){
        console.log(this.name)
    }
    return obj
}
var person = createObj('zhangsan',18,'男')
console.log(person) //{ name: 'zhangsan', age: 18, sex: '男', sayName: [Function] }

// 2.构造函数模式
/* 
    构造函数的执行流程：
    1. 立即创建一个新的对象
    2. 将新建的对象设置为函数中的this， 在构造函数中可以使用this来引用新建的对象
    3. 逐行执行函数中的代码
    4. 将新建的对象作为一个返回值返回
*/
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    this.sayName = function(){
        console.log(this.name)

    }
}
var person2 = new Person('lisi',20,'女')
console.log(person2)    //Person { name: 'lisi', age: 20, sex: '女', sayName: [Function] }
person2.sayName()   //lisi
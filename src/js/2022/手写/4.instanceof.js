/**
 * instanceof 用于检测构造函数的prototype是否在实例的原型链上
 */

function myInstanceof(left, right) {
    // 先排除基本数据类型
    if(typeof left !== 'object' || left === null) return false
    let proto = left.__proto__
    while(proto) {
        if(proto === right.prototype) return true
        proto = proto.__proto__
    }
    return false
}

function Person() {}
let person = new Person()
console.log(myInstanceof(person,Person)) // true
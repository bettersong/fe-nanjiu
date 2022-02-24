/*
new的内部原理：
1.新建一个空对象
2.链接到原型
3.绑定this
4.返回该对象
*/
function myNew() {
// 1.新建一个空对象
let obj = {}
// 2.获得构造函数
let con = arguments.__proto__.constructor
// 3.链接原型
obj.__proto__ = con.prototype
// 4.绑定this，执行构造函数
let res = con.apply(obj, arguments)
// 5.返回新对象
return typeof res === 'object' ? res : obj
}

var person = myNew()
person.name = 'zhangsan'
console.log(person) //{name: "zhangsan"}
console.log(typeof person === 'object') //true

;
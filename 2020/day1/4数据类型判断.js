/**
 *  typeof判断基本数据类型除了null会返回object，其他都会返回正确的数据类型
 *  typeof判断引用数据类型除了函数会返回function，其他都会返回object
 *  instanceof无法判断基本数据类型，可以准确判断引用数据类型
 *  Object.prototype.toString可以准确判断任意数据类型
 */

console.log(typeof (() => {})) // function

console.log(typeof ['前端有的玩','公众号']) //object

console.log(typeof null) // object

console.log(typeof undefined) // undefined

console.log(typeof Function.prototype) // function

console.log('子君' instanceof String)  // false,,,instanceof无法判断基本数据类型，可以准确判断引用数据类型

console.log(new Date() instanceof Date) // true
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(function(){})) // [object Function]

console.log('--------------------------------------')
const a = {}
const b = Symbol('1')
const c = Symbol('1')
a[b] = '子君'
a[c] = '君子'

// 我是子君还是君子呢
console.log(a[b]) // 子君

const d = {}
const e = {key: '1'}
const f = {key: '2'}
d[e] = '子君'
d[f] = '君子'

// 我是子君还是君子呢
console.log(d[e]) // 君子


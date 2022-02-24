// typeof
/* 
定义：typeof是一元操作符，后面可以跟任意数据类型，返回值表示操作数类型的字符串
使用typeof检测es5中的六种数据类型
数据类型：String，Boolean, Number, Null,  Undefined, Object
返回值：  string，boolean，number，object，undefined，object
这里需要注意除了Null返回的是object，其他都是对应的，这貌似是js中存在很久的bug
但Object类型又可以分很多种，比如，Array，Function，Date，Error等
这些例子里面typeof只能检测出Function返回值是function，其他全都返回object
*/
var obj = {}
console.log(typeof obj)   //object
var array = []
console.log(typeof array) //object
var fun = function(){}
console.log(typeof fun) //function
var date = new Date()
console.log(typeof date) //object


// Object.prototype.toString()
var number = 1; // [object Number]
var string = '123'; // [object String]
var boolean = true; // [object Boolean]
var und = undefined; // [object Undefined]
var nul = null; // [object Null]
var obj = {
    a: 1
} // [object Object]
var array = [1, 2, 3]; // [object Array]
var date = new Date(); // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g; // [object RegExp]
var func = function a() {}; // [object Function]

function checkType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(Object.prototype.toString.call(arguments[i]))
    }
}

checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
console.log(Object.prototype.toString.call(Math)); // [object Math]
console.log(Object.prototype.toString.call(JSON)); // [object JSON]
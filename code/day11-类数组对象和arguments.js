
// 数组
var arr = [1,2,3,4,'abc']
console.log(arr) //[ 1, 2, 3, 4, 'abc' ]
// 类数组对象
var likeArr = {
    '0': 'aaa',
    '1': 'bbb',
    '2': 'ccc',
    length: 3
}
console.log(likeArr) //{ '1': 'aaa', '2': 'bbb', '3': 'ccc', length: 3 }

// 类数组的length属性
console.log(likeArr.length)     //3
// 调用数组方法则会报错
//likeArr.push(1) //TypeError: likeArr.push is not a function

// 借用call或apply来调用数组方法
Array.prototype.push.call(likeArr,1)
console.log(likeArr)    //{ '0': 'aaa', '1': 'bbb', '2': 'ccc', '3': 1, length: 4 }

// 再来说说arguments
/* 
    arguments是函数内部的参数列表，它只存在函数内部，包括了函数的所有参数和其他属性，
    如callee属性用来指向这个拥有arguments对象的函数,注意：它并不是一个类数组对象
*/

function fn(){
    console.log(arguments)
    console.log(arguments.callee)
    for (let item of arguments) {
        console.log(item)
    }
}
fn(1,2)
/* 
[Arguments] { '0': 1, '1': 2 }
[Function: fn]
*/
// argument可以用for...of来遍历，凡是具有Iterator接口的数据结构都能使用for...of来遍历
for (let item of likeArr) {
    console.log(item)
}

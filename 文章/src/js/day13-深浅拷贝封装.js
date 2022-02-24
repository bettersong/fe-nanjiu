// 浅拷贝封装
/* 
思路：就是遍历数组或对象，将属性与属性值复制到新数组中去
*/
function shallowCopy(obj){
    // 判断是否为对象
    if(typeof obj != 'object') return
    var newObj = obj instanceof Array ? [] : {}
    for(var item in obj){
        newObj[item] = obj[item]
    }
    return newObj
}
var obj = [1,2,{name:'zhangsan'}]
var newobj = shallowCopy(obj)
obj[2].name = 'lisi'
console.log(obj)   // [ 1, 2, { name: 'lisi' } ]
console.log(newobj) //[ 1, 2, { name: 'lisi' } ]
console.log(obj == newobj)
// 这样就实现了浅复制的封装

// 深拷贝
/* 
思路：递归调用深拷贝函数
 */
function deepCopy(obj){
    if(typeof obj != 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for(let key in obj){
        // 判断数据类型是否为object，如果是基本数据类型就不用递归调用
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
    return newObj
}
var obj1 = {name: 'zhangsan',age:12,like:[1,2,3,4]}
var newObj1 = deepCopy(obj1)
obj1.name = 'lisi'
obj1.like = [2,2,2,2]
console.log(obj1) //{ name: 'lisi', age: 12 }
console.log(newObj1) //{ name: 'zhangsan', age: 12 }



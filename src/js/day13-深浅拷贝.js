/* 
以数组为例

*/
// 数组元素都是基本数据类型
var arr = [1, 'abc', true, null, undefined]
var newArr = arr.concat()
// 这里修改原数组看新旧数组的变化
arr[2] = false
console.log(arr) //[ 1, 'abc', false, null, undefined ]
console.log(newArr)  //[1, 'abc', true, null, undefined]
// 这里因为数组中的数据都是基本数据类型，所以拷贝的都是真正的值，新旧数组互不影响（相当于深拷贝）

// 数组元素都是引用数据类型

var arr2 = [[1,2,3], {name:'zhangsan'}]
var newArr2 = arr2.concat()
// 修改原数组看新旧数组的变化
arr2[1].name = 'lisi'
console.log(arr2) //[ [ 1, 2, 3 ], { name: 'lisi' } ]
console.log(newArr2) //[ [ 1, 2, 3 ], { name: 'lisi' } ]
// 这里新旧数组打印出来都发生了变化，因为引用类型数据拷贝的只是他的引用（指针）

// 数组的深拷贝
var arr3 = [[1,2,3],{name: 'zhangsan',age: 18}]
// 使用json序列化方法进行深拷贝
var newArr3 = JSON.parse(JSON.stringify(arr3))
// 改变原数组看新旧数组的变化
arr3[0][2] = 6
arr3[1].name = 'wawawa'
console.log(arr3) //[ [ 1, 2, 6 ], { name: 'wawawa', age: 18 } ]
console.log(newArr3) //[ [ 1, 2, 6 ], { name: 'zhangsan', age: 18 } ]
// 这样两个新旧数组就相互不会影响了，这就是引用类型数据的深拷贝，需要注意的是这个方法不能序列化方法，也就是说对于函数，这种方法是没用的


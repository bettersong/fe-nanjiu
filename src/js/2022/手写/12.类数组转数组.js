/**
 * 类数组是具有length属性，但不具有数组原型上的方法。常见的类数组有arguments、DOM操作方法返回的结果。
 */

function translateArray() {
    //方法一：Array.from
    const res1 = Array.from(arguments)
    console.log(res1 instanceof Array, res1) // true [ 1, 2, 3 ]

    // 方法二：Array.prototype.slice.call
    const res2 = Array.prototype.slice.call(arguments)
    console.log(res2 instanceof Array, res2) // true [ 1, 2, 3 ]

    // 方法三：concate
    const res3 = [].concat.apply([],arguments)
    console.log(res3 instanceof Array, res3) // true [ 1, 2, 3 ]

    // 方法四：扩展运算符
    const res4 = [...arguments]
    console.log(res4 instanceof Array, res4) // true [ 1, 2, 3 ]
}

translateArray(1,2,3)

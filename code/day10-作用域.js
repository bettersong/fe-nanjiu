
/* 
javascript采用的是词法作用域（静态作用域），也就是函数的作用域在函数声明的时候就已经决定了
 */

var name = 'zhangsan'
function test(){
    console.log(name)
}

function sayName(){
    var name = 'lisi'
    test()
}

sayName()    // 'zhangsan'

/* 
这里是因为JavaScript采用的词法作用域，函数的作用域在函数声明是就已经决定以，在调用sayName方法执行test时，首先test会在自己函数内部（局部作用域）寻找变量name，没找到就会在它被声明的地方往上一层寻找，找到了变量name='zhangsan',并且它根本不会去sayName方法的局部作用域中寻找
*/
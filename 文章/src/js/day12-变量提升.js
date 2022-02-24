console.log(say)   //fun   说明变量提升到最前面
function say(){
    console.log('fun')
}
var say = 'zhangsan'

console.log(say)

/* 
js引擎在代码正式执行之前会做一个预处理工作：
    - 收集变量
    - 收集函数
    依据：
        var 将var后边的变量定义但不赋值
        function(){}提前定义函数

*/

/* 
    执行上下文   执行上下文对象

    执行上下文（execute context）EC
    理解：代码执行的环境
    时机：代码执行之前会进入到执行环境
    工作：
        1.创建一个变量对象
            收集变量
            收集函数及函数的参数
            全局：window
            局部：抽象的但是确实存在
        2.确认this的指向
            1.全局：this---->window
            2.局部：this---->调用其的对象
        3.创建作用域链
            父级作用域链 + 当前变量对象
        4.扩展：
            执行上下文：ECObj = {
                变量对象： {变量，函数，函数的形式}
                scopeChain: 父级作用域 + 当前变量对象
                this: {window || 调用其的对象}
            }
*/

function People (name) {
   this.name = name;
}

// TODO
People.prototype.sayHi = function(){
    console.log('Hi, I am' + this.name)
}

var jerry = new People('Jerry');
jerry.sayHi(); // => 'Hi, I am Jerry'

var lucy = new People('Lucy');
lucy.sayHi(); // => 'Hi, I am Lucy'

// -----------------
var arr = [{
        name: 'Jerry'
    },
    {
        name: 'Lily'
    },
    {
        name: 'Lucy'
    },
    {
        name: 'Tomy'
    }
];

// var arr2 = /* TODO */ 
var arr2 = [...arr]


console.log(arr === arr2); // => false
console.log(arr[0] === arr2[0]); // => true
console.log(arr[1] === arr2[1]); // => true
console.log(arr[2] === arr2[2]); // => true
console.log(arr[3] === arr2[3]); // => true

//-------------------------------------
var name = 'jerry';

function sayHi() {
    return 'Hi, I am ' + this.name;
}

var lucy = {
    name: 'Lucy',
    sayHi: sayHi,
    sayAnotherHi: function () {
        return sayHi();
    }
};

var tomy = {
    name: 'Tomy'
}

console.log(sayHi()); // 1:jerry
console.log(lucy.sayHi()); // 2:Lucy
console.log(lucy.sayHi.apply(tomy)); // 3:Tomy
console.log(lucy.sayAnotherHi()); // 4:jerry

(function () {
    var a = 0;

    function run() {
        a = 1;

        function run2() {
            console.log(a); // 1:undefined
            var a = 3;
            console.log(a); // 2:3
        }
        run2();
        console.log(a); // 3:1
        function run3(a) {
            //var a
            console.log(a); // 4:8
            a = 5;   //变成了run3中的局部变量
        }
        run3(8);
        console.log(a); // 5:

        function run4() {
            a = 4;
        }
        console.log(a); //6:1

        return run4;
    }
    run()
    var result = run();
    console.log(a); // 7:1

    result();
    console.log(a); // 8:4
})();
console.log('-------------------------')
var b = 10
function test(){
    b = 20
    function test2(){
        console.log(b)
        b = 30
    }
    test2()
    console.log(b)
}
test()
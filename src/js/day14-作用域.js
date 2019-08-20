var a = 100
function test(){
    var b = a * 2
    var a = 200
    var c = a/2
    console.log(b)
    console.log(c)
}
test()      //NaN 100

var tt = 'aa'
function fn(){
    console.log(tt)   //undefined
    var tt = 'dd'
    console.log(tt)   //dd
}
fn()

// 词法作用域,函数作用域在函数被声明时就已经确定了
var a = 10
function fun(){
    console.log(a)
}

(function(f){
    var a = 20
    f()    //10
})(fun)

// 闭包
var data = []
for(var i=0; i<3; i++){
    data[i] = function(){
        console.log(i)
    }
}
data[0]()   //3
// console.log(parseInt('aaa'))
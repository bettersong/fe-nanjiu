/* 
先来看看这个问题
*/
var fun1 = function(){
    console.log('aaa')
}
fun1()
var fun1 = function(){
    console.log('bbb')
}
fun1()
/*这里打印出来是
aaa
bbb
这里只是变量提升
*/

function fun2(){
    console.log('ccc')
}
fun2()
function fun2(){
    console.log('ddd')
}
fun2()
/* 
这里打印出来的确实
ddd
ddd
因为这里是函数提升，函数提升到最顶部，所以第一个fun2()其实执行的也是下面那个fun2方法
*/
/**
 自定义instanceof 
*/
function instanceOf(left, right) {
    // 请完善以下代码，不能使用原生instanceof
    if(typeof left !== 'object' || left == null){
        return false
    }
    let proto = left.__proto__
    while(proto) {
        if(proto == right.prototype){
            return true
        }
        proto = proto.__proto__
    }
    return false
}

class A{}
class B extends A {}
class C{}

const b = new B()
// 输出 true
console.log(instanceOf(b,B))
// 输出 true
console.log(instanceOf(b,A))
// 输出 false
console.log(instanceOf(b,C))
console.log(instanceOf('2222',String))//false

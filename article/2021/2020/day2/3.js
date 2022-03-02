

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');
// script start -> async1 start -> async2 -> promise1 
// -> script end -> async1 end -> promise2 -> setTimeout

// async await
// async function wait(delay) {
//     const res = await new Promise(res => {
//         setTimeout(res,delay)
//     })
//     console.log(1)
//     return res
// }
// wait(2000)

// Promise
// function wait (delay) {
//     return new Promise(resolve => {
//         setTimeout(resolve,delay)
//     })
// }

// wait(2000).then(res=> {
//     console.log(1,res)
// })

// callback
// function wait(callback,delay) {
//     setTimeout(()=>callback(),delay)
// }
// wait(()=>console.log(1),2000)
// AbC->aBc 
function translate(str) {
    let s = ''
    for(let i = 0; i<str.length; i++ ) {
        if(str[i] === str[i].toUpperCase()){
            s+=str[i].toLowerCase()
        }else{
            s+=str[i].toUpperCase()
        }
    }
    return s
}
console.log(translate('AbC'))
// 隐式类型转换
var a = {
    value: 1,
    valueOf() {
        return a.value++
    }
    // toString: ()=> {
    //     return a.value++
    // }
}
// console.log(a.valueOf(),'sss')
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
console.log('--------------')
Number.prototype.add = function (s) {
    return this.valueOf() + s
}
Number.prototype.minus = function (s) {
    return this.valueOf() - s
}
console.log((2).add(3).minus(1))
console.log('==============')
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x)  // undefined
console.log(b.x)  // {n:2}
console.log('ssssssssssssssss')
// {1:222, 2:123, 5:888} 12月
let monthObj = {1:222, 2:123, 5:888}
const arr = new Array(12).fill(null)

for(let key in monthObj) {
    arr[key-1] = monthObj[key]
}
console.log(arr)
console.log('-----------------')
class LazyMan {
    constructor(name) {
        this.name = name
        this.task_list = []
        this.init()
    }
    init(){
        console.log('Hi I am '+this.name)
        setTimeout(()=>this.next(),0)
        return this
    }
    sleep(delay) {
        const fn = () => {
            setTimeout(()=>{
                console.log(`等待了${delay}秒`)
                this.next()
            },delay*1000)
        }
        this.task_list.push(fn)
        return this
    }
    sleepFirst(delay) {
        const fn = () => {
            setTimeout(()=>{
                console.log(`sleepFirst等待了${delay}秒`)
                this.next()
            },delay*1000)
        }
        this.task_list.unshift(fn)
        return this
    }
    eat(some) {
        const fn = () => {
            console.log('I am eating '+ some)
            this.next()
        }
        this.task_list.push(fn)
        return this
    }
    next() {
        const fn = this.task_list.shift()
        fn && fn()
        return this
    }
}

const lazyMan = (name) => new LazyMan(name)

lazyMan('Tony').sleep(3).eat('lunch').eat('dinner').sleepFirst(2)

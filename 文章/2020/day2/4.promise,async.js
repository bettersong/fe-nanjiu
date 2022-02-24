
// let pro
// try{
//     pro = new Promise((resolve,reject) => {
//         // throw Error('err....')
//         reject('error')
//     })
// }catch(err){
//     console.log('catch',err)
// }
// pro.catch(err=>{
//     console.log('promise',err)
// })

// function* gen() {
//     yield 'hello'
//     yield 'nan '
//     yield 'jiu'
// }
// const re = gen()
// console.log(re)
// const re1 = re.next()
// console.log(re1)
// const re2 = re.next()
// console.log(re2)
// const re3 = re.next()
// console.log(re3)
// const re4 = re.next()
// console.log(re4)

// console.log('--------------------')

// function* foo() {
//     console.log(1)
//     setTimeout(function* (){yield 2})
// }
// const f = foo()
// console.log('sssss')
// console.log(f)
// const f1 = f.next()
// console.log(f1)
// console.log(2)

console.log('------------async-----------------')

// function fn(delay) {
//     return new Promise(res => {
//         setTimeout(()=>{
//             console.log('111')
//             res('ssss')
//         },delay)
//     })
// }

// async function timeout(delay) {
//     await fn(delay)
//     console.log(222)
//     return 'res'
// }
// console.log(timeout(1000))

// async function f1() {
//     console.log(111)
// }
// f1().then(res=>{
//     console.log(222)
// })
// function f2() {
//     console.log(333)
// }
// f2()
// 题目一：
// console.log(100);
// setTimeout(() => {
//   console.log(200);
// })
// Promise.resolve().then(() => {
//   console.log(300);
// })
// console.log(400);
// // 100 400 300 200
// // 题目二：
// Promise.resolve().then(() => {
//   console.log(1);
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// })
// // 求打印结果：1 2 3
// 题目四：
// setTimeout(() => {
//   console.log('0');
// }, 0)
// new Promise((resolve, reject) => {
//   console.log('1');
//   resolve();
// }).then(() => {
//   console.log('2');
//   new Promise((resolve, reject) => {
//     console.log('3');
//     resolve();
//   }).then(() => {
//     console.log('4');
//   }).then(() => {
//     console.log('5');
//   })
// }).then(() => {
//   console.log('6');
// })

// new Promise((resolve, reject) => {
//   console.log('7');
//   resolve()
// }).then(() => {
//   console.log('8');
// })
// 求打印结果：1、7、2、3、8、4、6、5、0

console.log('script start')
async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function() {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
    console.log('Promise')
    resolve()
})
.then(function() {
    console.log('promise1')
    new Promise((resolve, reject) => {
        console.log('3');
        resolve();
    }).then(() => {
        console.log('4');
    }).then(() => {
        console.log('5');
    })
})
.then(function() {
    console.log('promise2')
})
console.log('script end')

// script start -> async2 end -> Promise -> script end -> async1 end -> promise1
// ->3 ->4 -> promise2 ->5 -> setTimeout







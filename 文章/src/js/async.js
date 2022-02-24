//先打印1，等一秒打印2

// async function deng(t){
//     console.log(1)
//     await new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve()
//         },t*1000)
//     })
// }
// deng(1).then(()=>{
//     console.log(2)
// })
// console.log(deng(1))

function timeOut(ms) {
    console.log(1)
    return new Promise((resolve,reject) => {
        setTimeout(reject,ms)
    })
}

async function wait(item,ms) {
    await timeOut(ms)
    console.log(item)
}
wait(3,5000).catch(err => {
    console.log(err)
})

// function timeout(ms) {
//     console.log(123)
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
  
//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
//   }
  
//   asyncPrint('hello world', 5000);


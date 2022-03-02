let p1 = new Promise((resolve, reject) => resolve('p1 success'))
let p2 = new Promise((resolve, reject) => reject('p2 reject'))
// 实现race
function fn(arr) {
  return new Promise((resolve, reject) => {
    for(let p of arr) {
        // debugger
      Promise.resolve(p).then(res => {
        // debugger
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  })
}

fn([p2, p1]).then((res) => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
})
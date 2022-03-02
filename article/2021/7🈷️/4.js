function repeat(func, times, wait) {
    // your code
    function dely(a){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                func.call(this,a)
                res()
            },wait)
        })
    }

    return async function(a){
        while(times>0){
            await dely(a)
            times --;
        }
    }
  }
  const repeatFun = repeat(console.log, 4, 3000);
  repeatFun("Hello World");

  // 实现打印4次，每次间隔3000ms

  console.log("script start");

async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}
async1();
// script start, async2 end,Promise,script end,async1 end,promise1,promise2,setTimeout
setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");
// script start => async2 end => Promise => script end => async1 end=> promise1 => promise2 => setTimeout

[1, 2, 3, 4].reduce((pre, cur, index, array) => {
    console.log("?", pre, cur, index);
    return pre + cur;
});
  // callback 被执行了3次  无初始值执行3次，有初始值执行4次
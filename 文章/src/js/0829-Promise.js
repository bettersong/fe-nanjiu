/* 
    什么是Promise？
        Promise是异步编程的一种解决方案，比传统的解决方案--回调函数和事件--更合理更强大
        简单来说，Promise就是一个容器，里面通常存放的是一个异步操作，但Promise本身是同步的

        Promise有三种状态：pending（进行中），fulfilled（已成功）和rejected（已失败）
        只有异步操作的结果能够决定当前是哪一种状态，任何其他操作都无法改变这个状态
*/

var p = new Promise((resolve,reject) => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 1000);
    console.log(3)
    resolve()
})
p.then(()=>{
    console.log(4)
}).catch(()=>{
    console.log(5)
})

// 说说打印顺序，并解释？
/* 
    打印顺序应该是：1,3,4,2
    promise本身是同步的，所以代码自上而下执行，先打印1，遇到定时器，
    定时器属于异步任务中的宏任务，放入宏任务队列中，继续往下执行，打印3，
    往下执行遇到resolve方法，该方法是用来将Promise状态变为成功状态的，
    所以接着往下执行then方法（then属于异步任务中的微任务），放入微任务队列，接着往下走，
    catch方法不会执行，全局代码已经执行完，再回去看微任务队列中是否有任务，
    有一个then方法，执行打印4，微任务队列中没有任务了，再去看宏任务队列，有，执行打印2
*/


  setTimeout(function () {
    console.log("1");
  }, 0);

  async function async1() {
    console.log("2");
    const data = await async2();
    console.log("3");
    return data;
  }
//  2,4,7,5,3,6,async2的结果,1
  async function async2() {
    return new Promise((resolve) => {
      console.log("4");
      resolve("async2的结果");
    }).then((data) => {
      console.log("5");
      return data;
    });
  }

  async1().then((data) => {
    console.log("6");
    console.log(data);
  });

  new Promise(function (resolve) {
    console.log("7");
    //   resolve()
  }).then(function () {
    console.log("8");
  });
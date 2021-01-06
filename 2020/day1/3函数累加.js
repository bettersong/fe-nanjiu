/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a,b,callback) {
    setTimeout(function(){
     callback(null, a+b)
    },1000)
  }
  
  /**
   * 请在此方法中调用asyncAdd方法，完成数值计算
   * @param  {...any} rest 传入的参数
   */
  async function sum(...rest) {
    // 请在此处完善代码
    let res = rest.shift()
    for(let item of rest){
        res = await new Promise(resolve => {
            asyncAdd(res,item,(_,res) => {
                resolve(res)
            })
        })
    }
    return res
  }
  
//   let start = window.performance.now()
  sum(1, 2, 3, 4, 5, 6).then(res => {
    // 请保证在调用sum方法之后，返回结果21
    console.log(res)
    // console.log(`程序执行共耗时: ${window.performance.now() - start}`)
  })
  
// 随机打乱数组
function randomArr(arr){
    arr.forEach((item,index)=>{
        const randomId = Math.floor(Math.random() * arr.length); //这里记得加引号，偷懒容易掉坑，行首以[]开头的上一句结尾必须加引号
        // 交换元素
        [arr[index], arr[randomId]] = [arr[randomId], arr[index]]
    })
    return arr
}
let arr = [1,2,3,4,5,6,]
console.log(arr)      //[1,2,3,4,5,6]
console.log(randomArr(arr)) //  随机产生
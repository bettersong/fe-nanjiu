// 数组去重
var arr = [1, 2, 3, 2, 6, 4, 1, 3]
// function unique(arr){
//     let newArr = []
//     for(var i=0;i<arr.length;i++){
//         if(newArr.indexOf(arr[i]) === -1){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(unique(arr))
// function unique2(arr){
//     let obj = {}
//     arr.forEach((item,index) => {
//         obj[item] = item
//     })
//     return Object.values(obj)
// }
// console.log(unique2(arr))

// console.log([...new Set(arr)])

// function unique3(arr) {
//     let newArr = arr.filter((item,index,arr) => {
//         return index === arr.indexOf(item)
//     })
//     return newArr
// }
// console.log(unique3(arr))

// 快排
function quickSort(arr){
//   先判断数组长度，如果小于2就直接返回
    if(arr.length < 2){
        return arr
    }
    let firstItem = arr[0]  //先取出第一个元素用来作参考
    let leftArr = []   //定义一个左数组用来存放比参考元素小的元素
    let rightArr = []  // 定义一个右数组用来存放比参考元素大的元素
    for(let i=1; i<arr.length; i++){
        // 开始遍历数组
        if(arr[i] < firstItem){
            // 比参考元素小，放入左数组
            leftArr.push(arr[i])
        }else {
            // 否则放入右数组
            rightArr.push(arr[i])
        }
    }
    // 再对左右数组进行递归
    return quickSort(leftArr).concat([firstItem],quickSort(rightArr))
}

console.log(quickSort([1, 2, 3, 5, 3, 6, 9, 7, 3, 5, 8])) //[ 1, 2, 3, 3, 3, 5, 5, 6, 7, 8, 9 ]

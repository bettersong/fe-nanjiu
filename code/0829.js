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
    if (arr.length <= 1) {
        return arr
    }
    let firstItem = arr[0]
    let leftArr = []
    let rightArr = []
    for(let i=1;i<arr.length;i++){
        if (arr[i] < firstItem) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return quickSort(leftArr).concat([firstItem],quickSort(rightArr))
}

console.log(quickSort(arr))

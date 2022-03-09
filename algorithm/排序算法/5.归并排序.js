// 将数组一直等分，然后合并
function merge(left, right) {
    let tem = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            tem.push(left.shift())
        }else{
            tem.push(right.shift())
        }
    }
    return tem.concat(left,right)
}
function mergeSort(arr) {
    const len = arr.length
    if(len<2) return arr
    let mid = Math.floor(len / 2), left = arr.slice(0,mid), right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
console.log(mergeSort([3,44,15,36,26,27,2,46,4,19,50,48]))
// [2,  3,  4, 15, 19, 26, 27, 36, 44, 46, 48, 50]

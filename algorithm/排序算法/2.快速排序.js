function quickSort(arr) {
    if(arr.length<=1) return arr
    const left = [],right = [],current = arr.splice(0,1)
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<current) {
            // 小于参考值放左边
            left.push(arr[i]) 
        }else{
            // 否则放右边
            right.push(arr[i])
        }
    }
    //递归上述步骤
    return quickSort(left).concat(current,quickSort(right))
}

console.log(quickSort([3,44,15,36,26,27,2,46,4,19,50,48]))
//[2,  3,  4, 15, 19, 26, 27, 36, 44, 46, 48, 50]
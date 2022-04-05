

/**
 * 快速排序
 * 思路就是先选一个参考值，然后遍历数组，小于参考值的放左边，大于等于参考值的放右边
 * 然后再递归左右两边数组再拼接
 */

function quickSort (arr) {
    if(arr.length < 2) return arr
    let left = [], right = [], current = arr.splice(0, 1)
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < current) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(current, quickSort(right))
}

let arr = [1,3,2,5,9,4,6,8,3]
console.log(quickSort(arr))
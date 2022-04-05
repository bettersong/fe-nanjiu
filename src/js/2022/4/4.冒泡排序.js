
/**
 * 冒泡排序
 */

function bubbleSort(arr) {
    if(arr.length < 2) return arr
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

let arr = [1,3,6,2,8,4,9,5,2]
console.log(bubbleSort(arr))
/**
 * 外循环控制需要比较的元素，比如第一次排序后，
最后一个元素就不需要比较了，内循环则负责两两元素比较，将元素放到正确位置上
*/
function bubbleSort(arr) {
    const len = arr.length
    for(let i=0; i<len; i++) {
        for(let j=0;j<len-1-i; j++) {
          // 注意边界值
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]] // 交换位置
            }
        }
    }
    return arr
}

console.log(bubbleSort([3,44,15,36,26,27,2,46,4,19,50,48]))
//[2,3,4,15,19,26,27,36,44,46,48,50]
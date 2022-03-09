/**
 * 先假设第一个元素为最小的，然后通过循环找出最小元素，
 * 然后同第一个元素交换，接着假设第二个元素，重复上述操作即可
 */

 function selectSort(arr) {
    let len = arr.length, minIndex, tem
    for(let i=0; i<len-1; i++) {
        minIndex = i //最小值下标
        for(let j=i+1; j<len; j++) {
            if(arr[j] < arr[minIndex]){
                // 找出最小值
                minIndex = j //更换最小值下标
            }
        }
        // 交换位置
        tem = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tem
    }
    return arr
}

console.log(selectSort([3,44,15,36,26,27,2,46,4,19,50,48]))
//[2,  3,  4, 15, 19, 26, 27, 36, 44, 46, 48, 50]
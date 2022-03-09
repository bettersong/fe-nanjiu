/**双层循环，外循环控制未排序的元素，内循环控制已排序的元素，将未排序元素设为标杆，
与已排序的元素进行比较，小于则交换位置，大于则位置不动
*/
function insertSort(arr) {
    let tem
    for(let i=0; i<arr.length; i++) {
        tem = arr[i]
        for(let j=i; j>=0; j--){
            if(arr[j-1] > tem){
                arr[j] = arr[j-1]
            }else {
                arr[j] = tem
                break
            }
        }
    }
    return arr
}
console.log(insertSort([3,44,15,36,26,27,2,46,4,19,50,48]))
//[2,  3,  4, 15, 19, 26, 27, 36, 44, 46, 48, 50]
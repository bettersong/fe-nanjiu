// day05 - 写个方法找出字符串重复最多的字符及长度？


function searchMaxStr(str){
    // str.split('').forEach(item=>{
    //     console.log(item)
    // })
    var arr = str.split('')    //先转为数组
    var newStr = []   //存放次数的数组
    for(var i=0; i<arr.length; i++){
        var count = 1
        for(var j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                newStr[i] = count++
            }
        }
    }
    console.log(Math.max(...newStr))
    // 再找出对应的下标

}

searchMaxStr('abcdeabs')
// let cfStr = str => {
//     let num = 0;
//     let cfs = str[0];
//     console.log(cfs)
//     for (var i = 0; i < str.length; i++) {
//         num = num > str.split(str[i]).length - 1 ? num : str.split(str[i]).length - 1
//         cfs = num > str.split(str[i]).length - 1 ? cfs : str[i]
//     }
//     return '重复次数:' + num + '重复字符串:' + cfs
// }
// console.log(cfStr('abcdabdkel'))
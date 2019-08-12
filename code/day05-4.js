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
    console.log(newStr)
}

searchMaxStr('abcdeabs')
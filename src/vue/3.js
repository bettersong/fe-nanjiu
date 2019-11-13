// 3. 将字符串 "[(2018-10-11),(2011-01-01),(2000-03-02)]"
// 解析成以下格式的数组对象输出: [{
//     y: 2018,
//     m: 10,
//     d: 11
// }, {
//     y: 2011,
//     m: 01,
//     d: 01
// }, {
//     y: 2000,
//     m: 03,
//     d: 02
// }]
var str = '[(2018 - 10 - 11), (2011 - 01 - 01), (2000 - 03 - 02)]'
function parse(input) {
    //请按照题目要求实现函数内容，并返回符合题目要求的对象
    // 先将字符转转为数组
    var inputArr = str.replace(/\"/g, "")
    // console.log(typeof inputArr)
    var res = inputArr.split(',')
    var arr = []
    res.forEach((item,index) => {
        var items = item.split('-')
        var y = items[0].replace(/[^\d]/g, '')
        var m = items[1].replace(/[^\d]/g, '')
        var d = items[2].replace(/[^\d]/g, '')
        console.log(y)
        arr.push({y:y,m:m,d:d})
    })
    return arr
}
console.log(parse(str)) 
/*[ { y: '2018', m: 10, d: 11 },
  { y: '2011', m: 1, d: 1 },
  { y: '2000', m: 3, d: 2 } ]
  */
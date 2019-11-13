// 1.已知总数量为count,每页容量为pageSize,返回当前要访问的页数为currentPage对应数据库的索引位置(比如第一页开始位置是0,第二页开始位置是10 ...)

let count = 199;
let pageSize = 10;
function getOffset(currentPage) {
//请按照题目要求实现函数内容，并返回符合题目要求的索引值
// console.log(currentPage * pageSize)
    if(currentPage * pageSize <= count){
        return (currentPage-1) * pageSize
    }else{
        return ''
    }
}
console.log(getOffset(1))  //0

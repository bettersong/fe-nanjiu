/**
 * 
 */

function flat(arr) {
    const res = []
    // 递归实现
    const stack = [...arr] // 复制一份
    while(stack.length) {
        //取出复制栈内第一个元素
        const val = stack.shift()
        if(Array.isArray(val)) {
            // 如果是数组，就展开推入栈的最后
            stack.push(...val)
        }else{
            // 否则就推入res返回值
            res.push(val)
        }
    }
    return res
}
const arr = [1,[2],[3,4,[5,6,[7,[8]]]]]
console.log(flat(arr)) //[1, 2, 3, 4, 5, 6, 7, 8]
/**
 * bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
 * 而其余参数将作为新函数的参数，供调用时使用。
 */

Function.prototype.myBind = function(context) {
    var context = context || window //获取需要改变的this
    context.fn = this  // 获取需要改变this的函数

    //获取函数参数
    const args = [...arguments].slice(1)
    // 与apply，call不同的是这里需要返回一个函数
    return () => {
        return context.fn.apply(context,[...args])
    }

}

function say(a,b,c) {
    console.log(this.name,a,b,c)
}
say.bind({name: 'nanjiu'},1,2,3)() //nanjiu 1 2 3
say.myBind({name: 'nanjiu'},1,2,3)() //nanjiu 1 2 3
/** 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 */


var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// ----------------------------------
/**
 * 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。
注意：

有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。
输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
 */

var evalRPN = function(tokens) {
    const stack = []
    const str = ['+', '-', '*', '/']
    for(let i = 0; i < tokens.length; i++) {
        if(!str.includes(tokens[i])) {
            stack.push(Number(tokens[i]))
        }else {
            const a = stack.pop()
            const b = stack.pop()
            const token = tokens[i]
            if(token == '+') {
                stack.push(Number(b) + Number(a))
            }else if(token == '-') {
                stack.push(Number(b) - Number(a))
            }else if(token == '*') {
                stack.push(Number(b) * Number(a))
            }else if(token == '/') {
                stack.push(Number(b) / Number(a) > 0 ? Math.floor(Number(b) / Number(a)) : Math.ceil(Number(b) / Number(a)))
            }
        }
    }
    return stack.pop()

};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
// (3 + 11) - 5
// 0+11
// evalRPN(["3","11","5","+","-"])
// (11 + 5)

// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

// (9 + 3) * -11 / 6 * 10 + 17 + 5
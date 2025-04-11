

// 买卖股票的最佳时机 I

/**
 * 
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

  你只能选择某一天买入这只股票，并选择在 未来的某一个不同的日子卖出该股票。

  设计一个算法来计算你所能获取的最大利润。

  返回你可以获得的最大利润。
  如果你不能获得任何利润，返回 0 。
 */

  // 贪心算法， 记录最小值，然后计算最大利润
var maxProfit = function(prices) {
    let min = prices[0]
    let maxRes = 0
    for (let i = 1; i < prices.length; i++) {
       if(prices[i] < min) {
            min = prices[i]
       }
        if(prices[i] > min) {
            maxRes = Math.max(maxRes, prices[i] - min)
        }
    }
    return maxRes
};

// console.log(maxProfit([7,6,4,3,1]))


// 买卖股票的最佳时机 II
/**
 * 
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。
输入：prices = [7,1,5,3,6,4]
输出：7
 */

// 动态规划
var maxProfit2 = function(prices) {
    let dp = new Array(prices.length).fill(0) // 利润数组
    // dp[0] = 0 // 第一天的利润为0
    for (let i = 1; i < prices.length; i++) {
        // dp[i] = Math.max(前一天的利润， 前一天的利润 + 今天的利润)
        dp[i] = Math.max(dp[i - 1], dp[i - 1] + prices[i] - prices[i - 1])
    }
    console.log(dp)
    return dp[prices.length - 1]
};

// 贪心,只收集每天的正利润
var maxProfit3 = function(prices) {
    let res = 0
    for(let i = 1; i < prices.length; i++) {
        res += Math.max(prices[i] - prices[i - 1], 0)
    }
    return res
}

// console.log(maxProfit3([7,1,5,3,6,4]))

var lengthOfLastWord = function(s) {
    const arr = s.split(' ').filter(item => item !== '')
    console.log(arr)
    return arr[arr.length-1]
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
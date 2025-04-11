/**
 * 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。

整天 定义为时间持续时间是 24 小时的 整数倍 。

例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。

输入： hours = [12,12,30,24,24]

输出： 2

[72,48,24,3]
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    const arr = new Array(24).fill(0) // 0-23余数的个数
    let res = 0 // 能构成整天的下标对
    
    for(let hour of hours) {
        // 24 - hours[i] % 24 为了处理 24小时的倍数
        console.log(arr[(24 - hour % 24) % 24], res)
        // 如果当前小时数的余数在arr中存在，说明有满足条件的下标对
        res += arr[(24 - hour % 24) % 24]
        // 将当前小时数的余数个数加1
        arr[hour % 24]++
    }
    console.log(res, arr)
    return res

};

countCompleteDayPairs([12,12,30,24,24])
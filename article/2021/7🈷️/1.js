// 两数和的位置
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            console.log(nums[i],nums[j])
            if(nums[i]+nums[j]==target) return [i,j]
        }
    }
};

let nums = [2,4,6,7,8],target = 9

console.log(twoSum(nums,target))

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 链表
var addTwoNumbers = function(l1, l2) {
    const res = parseInt(l1.reverse().join(""))+parseInt(l2.reverse().join(""))+'';
    
    return res.split("").reverse().map(item=>parseInt(item))

};
console.log(1)
console.log(addTwoNumbers([1,2,3,4],[4,5,6]))
// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (!k) {
        return
    }
    while (k) {
        nums.unshift(nums.pop())
        k--
    }
};

var rotate2 = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k))
}

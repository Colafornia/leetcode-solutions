// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length
    if (!len) {
        return 0
    }
    if (len === 1) {
        return nums[0]
    }
    return Math.max(robHelper(nums.slice(0, len - 1)), robHelper(nums.slice(1, len)))
};

var robHelper = function (nums) {
    const len = nums.length
    let ans = new Array(len + 1).fill(0)
    ans[0] = 0
    ans[1] = nums[0]
    for (let i = 1; i < len; i++) {
        ans[i + 1] = Math.max(ans[i], ans[i - 1] + nums[i])
    }
    return ans[len]
}

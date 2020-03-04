// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length
    if (!len) {
        return 0
    }
    let ans = new Array(len + 1).fill(0)
    ans[1] = nums[0]
    for (let i = 1; i < len; i++) {
        ans[i + 1] = Math.max(ans[i - 1] + nums[i], ans[i])
    }
    return ans[len]
};

var rob2 = function (nums) {
    return robHelper(nums, nums.length - 1, new Map())
};

var robHelper = function (nums, index, cache) {
    if (index < 0) {
        return 0
    }
    if (cache.has(index)) {
        return cache.get(index)
    }
    const ans = Math.max(nums[index] + robHelper(nums, index - 2, cache), robHelper(nums, index - 1, cache))
    cache.set(index, ans)
    return ans
}
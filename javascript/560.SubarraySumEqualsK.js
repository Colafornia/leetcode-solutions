// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let ans = 0
    if (!nums || !nums.length) {
        return ans
    }
    let cache = new Map()
    let sum = 0
    cache.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (cache.has(sum - k)) {
            ans = ans + cache.get(sum - k)
        }
        if (!cache.has(sum)) {
            cache.set(sum, 1)
        } else {
            cache.set(sum, cache.get(sum) + 1)
        }
    }
    return ans
};
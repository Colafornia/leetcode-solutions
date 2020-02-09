// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/

// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

// Example 1:
// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

// Example 2:
// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

// Follow Up:
// Can you do it in O(n) time?

var maxSubArrayLen = function (nums, k) {
    let sum = 0
    let res = 0
    // key is sum
    // value is the index
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum === k) {
            res = i + 1
        } else if (m.has(sum - k)) {
            // if sumi - sumj = k
            // means that the sum from i to js is k
            res = Math.max(res, i - m.get(sum - k))
        }
        if (!m.has(sum)) {
            m.set(sum, i)
        }
    }
    return res
}

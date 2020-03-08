// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (!nums || !nums.length) {
        return 0
    }
    let ans = Number.MAX_VALUE
    let begin = 0
    let end = 0
    let sum = 0
    while (end < nums.length) {
        sum += nums[end]
        while (sum >= s) {
            ans = Math.min(ans, end - begin + 1)
            sum = sum - nums[begin]
            begin++
        }
        end++
    }
    return ans === Number.MAX_VALUE ? 0 : ans
};

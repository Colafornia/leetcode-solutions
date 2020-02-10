// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (!nums || nums.length == 0) {
        return 0
    }

    let i = 0
    let j = 0
    let sum = 0
    let min = Number.MAX_VALUE

    while (j < nums.length) {
        sum += nums[j]
        while (sum >= s) {
            min = Math.min(min, j - i + 1)
            sum = sum - nums[i]
            i++
        }
        j++
    }

    return min == Number.MAX_VALUE ? 0 : min;
};

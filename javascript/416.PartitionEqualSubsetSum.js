// https://leetcode.com/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    if (!nums || nums.length < 2) {
        return false
    }
    let sum = 0
    nums.forEach(num => sum += num)
    if (sum % 2 === 1) {
        return false
    }
    sum = sum / 2
    return helper(nums, 0, 0, sum, new Map())
};
// memorized recursion
var helper = function (nums, index, sum, total, memoMap) {
    const key = index + '-' + sum
    if (memoMap.has(key)) {
        return memoMap.get(key)
    }
    if (sum === total) {
        return true
    }
    if (sum > total || index >= nums.length) {
        return false
    }
    // only two choices
    // add the num to subsets or not
    const result = helper(nums, index + 1, sum, total, memoMap) || helper(nums, index + 1, sum + nums[index], total, memoMap)
    memoMap.set(key, result)
    return result
}
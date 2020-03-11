// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        const val = Math.abs(nums[i]) - 1
        if (nums[val] > 0) {
            nums[val] = -nums[val]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans.push(i + 1)
        }
    }
    return ans
};
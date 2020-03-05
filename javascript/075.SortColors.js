// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (!nums || nums.length < 2) {
        return
    }
    let low = 0
    let high = nums.length - 1
    let i = 0
    while (i <= high) {
        if (nums[i] === 0) {
            const temp = nums[low]
            nums[low] = nums[i]
            nums[i] = temp
            low++
            i++
        } else if (nums[i] === 2) {
            const temp = nums[high]
            nums[high] = nums[i]
            nums[i] = temp
            high--
        } else {
            i++
        }
    }
};

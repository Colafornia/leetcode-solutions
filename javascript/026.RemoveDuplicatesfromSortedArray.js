// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0
    let i = 1
    while (i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            count++
        } else {
            // override the duplicate value
            nums[i - count] = nums[i]
        }
        i++
    }
    return nums.length - count
};

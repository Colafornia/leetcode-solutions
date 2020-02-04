// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 3) {
        return nums.length
    }
    // two pointers
    let i = 0
    nums.forEach((num) => {
        if (i < 2 || num > nums[i - 2]) {
            nums[i] = num;
            i++
        }
    })
    return i
};
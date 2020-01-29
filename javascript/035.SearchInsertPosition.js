// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (!nums.length) {
        return 0
    }
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return low
};
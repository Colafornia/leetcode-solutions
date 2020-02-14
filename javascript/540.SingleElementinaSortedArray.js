// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (!nums || !nums.length) {
        return -1
    }
    let high = nums.length - 1
    let low = 0
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                low = mid + 2
            } else {
                high = mid
            }
        } else {
            if (nums[mid] === nums[mid + 1]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    }
    return nums[low]
};

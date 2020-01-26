// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1]
        }
    }
    return nums[0]
};

var findMin2 = function (nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] < nums[high]) {
            high = mid
        } else if (nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high--
        }
    }
    return nums[low]
};
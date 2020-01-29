// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  straightforward method
var findPeakElement1 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i - 1 > 0 && nums[i - 1] > nums[i]) {
            continue
        }
        if (i + 1 < nums.length && nums[i + 1] > nums[i]) {
            continue
        }
        return i
    }
};

// binary search method

var findPeakElement2 = function (nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (nums[mid + 1] > nums[mid]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
};
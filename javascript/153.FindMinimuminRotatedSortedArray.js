// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(logn)
var findMin = function (nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] < nums[high]) {
            high = mid
        } else if (nums[mid] > nums[high]) {
            low = mid + 1
        }
    }
    return nums[low]
};

// O(n)
var findMin2 = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1]
        }
    }
    return nums[0]
};

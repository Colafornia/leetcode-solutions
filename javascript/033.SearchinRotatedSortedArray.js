// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const minIdx = findMinIdx(nums)
    if (target === nums[minIdx]) {
        return minIdx
    }
    let low = target > nums[nums.length - 1] ? 0 : minIdx
    let high = target > nums[nums.length - 1] ? minIdx - 1 : nums.length - 1
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
};

var findMinIdx = function (nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (target == nums[mid]) {
            return mid
        }
        if (nums[mid] < nums[low]) {
            // 6,7,0,1,2,3,4,5
            if (target < nums[mid] || target >= nums[low]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            // 2,3,4,5,6,7,0,1
            if (target > nums[mid] || target < nums[low]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}
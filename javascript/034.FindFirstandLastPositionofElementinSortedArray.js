// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
    if (!nums.length) {
        return [-1, -1]
    }
    let low = 0
    let high = nums.length - 1
    while (high >= low) {
        let mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] === target) {
            let first = mid
            while (first - 1 >= 0 && nums[first - 1] === target) {
                first--
            }
            let last = mid
            while (last + 1 < nums.length && nums[last + 1] === target) {
                last++
            }
            return [first, last]
        } else if (nums[mid] > target) {
            while (mid - 1 >= 0 && nums[mid] === nums[mid - 1]) {
                mid--
            }
            high = mid - 1
        } else {
            while (mid + 1 < nums.length && nums[mid] === nums[mid + 1]) {
                mid++
            }
            low = mid + 1
        }
    }
    return [-1, -1]
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
    let ans = [-1, -1]
    if (!nums.length) {
        return ans
    }
    // find first position
    let low = 0
    let high = nums.length - 1
    while (high > low) {
        let mid = Math.floor(low + (high - low) / 2)
        // only make low pointer jump
        if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    if (nums[low] !== target) {
        return ans
    }
    ans[0] = low
    // find last position
    high = nums.length - 1
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2)
        // only make low pointer jump
        if (nums[mid] > target) {
            high = mid - 1
        } else {
            // nums[mid] = target
            low = mid
        }
        if (high - low === 1) {
            // avoid dead loop
            low = nums[high] === target ? high : low
            break
        }
    }
    ans[1] = low
    return ans
};
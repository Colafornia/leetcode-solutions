// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let low = 1
    let high = nums.length - 1
    // item in nums is in range [low, high]
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        let count = 0
        nums.forEach((num) => {
            if (num <= mid) {
                count++
            }
        })
        if (count <= mid) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
};
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    let low = 0
    let high = A.length - 1
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        if (A[mid] < A[mid + 1]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
};
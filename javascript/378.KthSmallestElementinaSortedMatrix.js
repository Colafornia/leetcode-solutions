// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const len = matrix.length
    let low = matrix[0][0]
    let high = matrix[len - 1][len - 1]
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        let count = 0
        let maxium = low
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (matrix[i][j] > mid) {
                    break
                }
                if (matrix[i][j] > maxium) {
                    maxium = matrix[i][j]
                }
                count++
            }
        }
        if (count > k) {
            high = mid
        } else if (count < k) {
            low = mid + 1
        } else {
            return maxium
        }
    }
    return low
};
// https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    let low = 1
    let high = m * n
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        let count = 0
        for (let i = 1; i <= m; i++) {
            // if m*n <= mid count plus 1~n => n
            count += Math.min(Math.floor(mid / i), n)
        }
        if (count < k) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
};
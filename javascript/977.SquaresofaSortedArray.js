// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let ans = []
    let mid = 0
    while (A[mid] < 0) {
        if (mid === A.length - 1) {
            break
        }
        mid++
    }
    let i = mid
    let j = mid - 1
    while (ans.length < A.length) {
        if (j >= 0 && Math.abs(A[j]) < A[i]) {
            ans.push(A[j] * A[j])
            j--
        } else if (j >= 0 && i >= A.length) {
            ans.push(A[j] * A[j])
            j--
        } else {
            ans.push(A[i] * A[i])
            i++
        }
    }
    return ans
};

// https://leetcode.com/problems/subarrays-with-k-different-integers/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
    return subarraysWithMostKDistinct(A, K) - subarraysWithMostKDistinct(A, K - 1)
};

var subarraysWithMostKDistinct = function (A, K) {
    if (A.length < 2) {
        return A.length
    }
    const count = {}
    let ans = 0
    let i = 0
    for (let j = 0; j < A.length; j++) {
        if (!count[A[j]]) {
            K = K - 1
            count[A[j]] = 1
        } else {
            count[A[j]]++
        }
        while (K < 0) {
            if (count[A[i]] === 1) {
                K++
            }
            count[A[i]]--
            i++
        }
        ans += j - i + 1
    }
    console.log(ans)
    return ans;
}
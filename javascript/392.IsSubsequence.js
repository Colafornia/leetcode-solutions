// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0
    let j = 0
    if (!s.length) {
        return true
    }
    if (!t.length) {
        return false
    }
    while (i < s.length && j < t.length) {
        if (s.charAt(i) === t.charAt(j)) {
            i++
            if (i === s.length) {
                return true
            }
        }
        j++
    }
    return false
};

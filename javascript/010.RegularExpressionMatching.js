// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (!s && !p) {
        return true
    }
    if (s && !p) {
        return false
    }
    if (p.charAt(1) === '*') {
        if (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.' && s) {
            // x match x*
            // three ways here
            // 1. x* only match x
            // 2. x* match x and sequence
            // 3. x* didn't match anything, * is zero
            return isMatch(s.slice(1), p.slice(2)) ||
                isMatch(s.slice(1), p) ||
                isMatch(s, p.slice(2))
        } else {
            // ths * of x* is recognized as zero
            return isMatch(s, p.slice(2))
        }
    }
    if (p.charAt(0) === s.charAt(0) || p.charAt(0) === '.' && s) {
        return isMatch(s.slice(1), p.slice(1))
    }
    return false
};

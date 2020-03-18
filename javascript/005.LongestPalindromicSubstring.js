// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let begin = 0
    let maxLen = 0
    var helper = function (j, k) {
        while (j >= 0 && k < s.length && s.charAt(j) == s.charAt(k)) {
            j--
            k++
        }
        if (maxLen < k - j - 1) {
            // now the actual index should be j+1 ~ k-1
            begin = j + 1;
            maxLen = k - j - 1;
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        helper(i, i)
        helper(i, i + 1)
    }
    return s.substring(begin, begin + maxLen)
};

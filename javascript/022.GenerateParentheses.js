// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = []
    backtracking(ans, '', 0, 0, n)
    return ans
};

var backtracking = function (list, str, open, close, pair) {
    if (str.length === pair * 2) {
        list.push(str)
        return
    }
    if (open < pair) {
        backtracking(list, str + '(', open + 1, close, pair)
    }
    if (close < open) {
        backtracking(list, str + ')', open, close + 1, pair)
    }
}

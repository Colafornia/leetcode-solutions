// https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < i; j++) {
            // left * right
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
};
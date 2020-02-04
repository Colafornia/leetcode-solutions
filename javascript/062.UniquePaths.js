// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = []
    for (let i = 0; i < m; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            temp = i === 0 || j === 0 ? 1 : 0
            row.push(temp)
        }
        dp.push(row)
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1]
};

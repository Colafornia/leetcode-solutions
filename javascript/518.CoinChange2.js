// https://leetcode.com/problems/coin-change-2/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    if (!amount) {
        return 1
    }
    let dp = new Array(coins.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(amount + 1).fill(0)
    }
    dp[0][0] = 1
    for (let i = 1; i <= coins.length; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= amount; j++) {
            // j is the ammount value
            const coin = coins[i - 1];
            // 'j - coin' means the diff value, origin value + diff value = new Value
            dp[i][j] = dp[i - 1][j] + (j >= coin ? dp[i][j - coin] : 0);
        }
    }
    return dp[coins.length][amount]
};
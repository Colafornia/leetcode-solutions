var cuttingRope = function (n) {
    let dp = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
    }
    if (dp.hasOwnProperty(n)) {
        return dp[n]
    }
    let max = 0
    for (let i = 4; i <= n; i++) {
        max = 0
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            const res = dp[j] * dp[i - j]
            if (res > max) {
                max = res
            }
        }
        dp[i] = max
    }
    return max
}

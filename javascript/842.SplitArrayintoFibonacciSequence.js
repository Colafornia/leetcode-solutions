// https://leetcode.com/problems/split-array-into-fibonacci-sequence/

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
    let res = []
    const MAX_INT = Math.pow(2, 31) - 1
    const dfs = function (position) {
        if (position === S.length) {
            return res.length > 2
        }
        let num = 0
        for (let i = position; i < S.length; i++) {
            num = num ? num + S[i] : S[i]
            if (num > MAX_INT) {
                break
            }
            if (num.length > 1 && num[0] === '0') {
                // "01" is not a valid number according to the problem description
                break
            }
            if (res.length > 1) {
                let sum = Number(res[res.length - 2]) + Number(res[res.length - 1])
                if (num < sum) {
                    continue
                } else if (num > sum) {
                    break
                }
            }
            res.push(num)
            if (dfs(i + 1)) {
                return true
            }
            // backtracking
            res.pop()
        }
        return false
    }
    dfs(0)
    return res
};

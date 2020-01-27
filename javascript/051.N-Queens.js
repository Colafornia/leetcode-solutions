// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let ans = []
    let res = new Array(n)
    var dfsByRow = function (row) {
        if (row === n) {
            let arr = []
            ans.push(res.map((i) => {
                let arr = new Array(n).fill(".")
                arr[i] = "Q"
                return arr.join("")
            }))
        }
        for (let col = 0; col < n; col++) {
            if (isOk(row, col)) {
                res[row] = col
                dfsByRow(row + 1)
            }
        }
    }
    var isOk = function (row, col) {
        let leftUp = col - 1
        let rightUp = col + 1
        for (let i = row - 1; i >= 0; i--) {
            if (res[i] === col) {
                return false
            }
            if (leftUp >= 0 && res[i] === leftUp) {
                return false
            }
            if (rightUp <= n && res[i] === rightUp) {
                return false
            }
            leftUp--
            rightUp++
        }
        return true
    }
    dfsByRow(0)
    return ans
};

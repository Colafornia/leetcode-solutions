// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = []
    backtrack(ans, [], nums)
    return ans
};

var backtrack = function (ans, cur, toPut) {
    if (!toPut.length) {
        ans.push(cur)
    } else {
        for (let i = 0; i < toPut.length; i++) {
            let newToPut = [].concat(toPut)
            newToPut.splice(i, 1)
            let newCur = [].concat(cur)
            newCur.push(toPut[i])
            backtrack(ans, newCur, newToPut)
        }
    }
}

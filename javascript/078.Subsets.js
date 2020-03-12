// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = []
    backtrack(ans, [], nums, 0)
    return ans
};

var backtrack = function (ans, cur, nums, start) {
    ans.push(cur)
    for (let i = start; i < nums.length; i++) {
        const newCur = [].concat(cur)
        newCur.push(nums[i])
        backtrack(ans, newCur, nums, i + 1)
    }
}

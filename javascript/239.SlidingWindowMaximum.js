// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let queue = []
    let ans = []
    if (!nums || !nums.length || !k) {
        return ans
    }
    queue = nums.slice(0, k)
    ans.push(Math.max.apply(null, queue))
    for (let i = k; i < nums.length; i++) {
        let sum = ans[ans.length - 1]
        sum = sum - queue[0]
        sum = sum + nums[i]
        queue.shift()
        queue.push(nums[i])
        ans.push(Math.max.apply(null, queue))
    }
    return ans
};

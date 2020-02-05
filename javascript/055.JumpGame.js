// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length < 2) {
        return true
    }
    let i = 0
    let maxReach = 0
    for (i = 0; i < nums.length && i <= maxReach; i++) {
        maxReach = Math.max(i + nums[i], maxReach)
        if (maxReach >= nums.length - 1) {
            return true
        }
    }
    return false
};

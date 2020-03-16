// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let ans = 0
    let i = 0
    let j = height.length - 1
    while (i < j) {
        ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]))
        if (height[i] < height[j]) {
            i += 1
        } else {
            j -= 1
        }
    }
    return ans
};

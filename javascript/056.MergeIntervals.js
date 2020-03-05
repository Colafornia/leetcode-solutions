// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals || !intervals.length) {
        return intervals
    }
    let ans = []
    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0]
    ans.push(prev)
    for (const current of intervals) {
        if (current[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], current[1])
        } else {
            ans.push(current)
            prev = current
        }
    }
    return ans
};

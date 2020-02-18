// https://leetcode.com/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let ans = []
    let i = 0
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i])
        i++
    }
    // adjust start
    newInterval = [Math.min(newInterval[0], i < intervals.length ? intervals[i][0] : Infinity), newInterval[1]]
    while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    ans.push(newInterval)
    return ans.concat(intervals.slice(i, intervals.length))
}

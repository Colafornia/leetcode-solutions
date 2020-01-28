// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {}

    nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1)

    let sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a])

    return sortedKeys.slice(0, k)
};

// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (!k) {
        return
    }
    while (k) {
        nums.unshift(nums.pop())
        k--
    }
};

var rotate2 = function (nums, k) {
    nums.unshift(...nums.splice(nums.length - k))
}

function rotate3(nums, k) {
    if (!nums.length) return []

    if (k > 0) {
        k = k % nums.length;
        reverse(nums, 0, nums.length - 1)
        reverse(nums, 0, k - 1)
        reverse(nums, k, nums.length - 1)
    }

    return nums
};

function reverse(arr, start, end) {
    if (!arr || !arr.length || start >= end) return

    while (start < end) {
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++, end--
    }

    return arr
}

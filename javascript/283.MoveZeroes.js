// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (!nums || !nums.length) {
    return nums
  }
  let i = 0
  nums.forEach((num) => {
    if (num !== 0) {
      nums[i++] = num
    }
  })
  while (i < nums.length) {
    nums[i++] = 0
  }
};

module.exports = moveZeroes;

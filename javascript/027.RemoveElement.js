// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length
  let i = 0
  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1]
      len--
    } else {
      i++
    }
  }
  return len
};

module.exports = removeElement;

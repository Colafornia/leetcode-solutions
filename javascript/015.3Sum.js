// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (i && nums[i] === nums[i - 1]) continue
    let low = i + 1
    let high = nums.length - 1
    let sum = 0 - nums[i]
    while (low < high) {
      if (nums[low] + nums[high] === sum) {
        ans.push([nums[i], nums[low], nums[high]])
        while (low < high && nums[low] === nums[low + 1]) {
          low++
        }
        while (low < high && nums[high] === nums[high - 1]) {
          high--
        }
        low++
        high--
      } else if (nums[low] + nums[high] < sum) {
        low++
      } else {
        high--
      }
    }
  }
  return ans
};
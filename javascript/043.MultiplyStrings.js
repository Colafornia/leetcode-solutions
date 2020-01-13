// https://leetcode.com/problems/multiply-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  const l1 = num1.split('')
  const l2 = num2.split('')
  let result = new Array(l1.length + l2.length).fill(0)
  for (let i = l1.length - 1; i >= 0; i--) {
    for (let j = l2.length - 1; j >= 0; j--) {
      const mul = l1[i] * l2[j]
      const sum = mul + result[i + j + 1]
      result[i + j] += Math.floor(sum / 10)
      result[i + j + 1] = sum % 10
    }
  }
  while(result.length && result[0] === 0) {
    result.shift()
  }
  return result.join('')
};
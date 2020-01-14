// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n < 1) {
        return false
    }
    let numberObject = {}
    let sum = n
    while (sum !== 1) {
        let numbers = String(sum).split('')
        sum = 0
        numbers.map(n => sum += n * n)
        if (numberObject.hasOwnProperty(sum)) {
            return false
        }
        numberObject[sum] = sum
    }
    return true
};
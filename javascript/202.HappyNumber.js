// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
// HashTable
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

// Two Pointers
var isHappy2 = function (n) {
    if (n < 1) {
        return false
    }
    let fast = n
    let slow = n
    while (fast !== 1) {
        fast = calculateSum(calculateSum(fast))
        slow = calculateSum(slow)
        if (fast === slow && fast !== 1) {
            return false
        }
    }
    return true
};

var calculateSum = function (n) {
    let sum = 0
    while (n) {
        let tmp = n % 10
        sum += tmp * tmp
        n = Math.floor(n / 10)
    }
    return sum;
}

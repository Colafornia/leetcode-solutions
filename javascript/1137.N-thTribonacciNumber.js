// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    var memory = {
        0: 0,
        1: 1,
        2: 1
    }
    return function (n) {
        if (memory.hasOwnProperty(n)) {
            return memory[n]
        }
        memory[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
        return memory[n]
    }
}();

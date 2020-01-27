// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    const memory = {
        0: 0,
        1: 1,
    }
    return function (N) {
        if (memory.hasOwnProperty(N)) {
            return memory[N]
        }
        memory[N] = fib(N - 1) + fib(N - 2)
        return memory[N]
    }
}();

// https://leetcode.com/problems/validate-stack-sequences/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = []
    if (pushed.length !== popped.length) {
        return false
    }
    for(let i = 0; i < popped.length; i++) {
        const number = popped[i]
        if (stack.length && stack[0] === number) {
            stack.shift()
        } else if (pushed.indexOf(number) > -1) {
            while (pushed.length && number !== pushed[0]) {
                stack.unshift(pushed[0])
                pushed.shift()
            }
            pushed.shift()
        } else {
            return false
        }
    }
    return true
};
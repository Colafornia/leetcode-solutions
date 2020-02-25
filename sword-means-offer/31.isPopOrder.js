var isPopOrder = function(pPush, pPop) {
    let stack = []
    if (pPush.length !== pPop.length) {
        return false
    }
    for(let i = 0; i < pPop.length; i++) {
        const number = pPop[i]
        if (stack.length && stack[0] === number) {
            stack.shift()
        } else if (pPush.indexOf(number) > -1) {
            while (pPush.length && number !== pPush[0]) {
                stack.unshift(pPush[0])
                pPush.shift()
            }
            pPush.shift()
            console.log('while', stack, pPush)
        } else {
            console.log('false', i, stack, pPush)
            return false
        }
    }
    return true
}

console.log(isPopOrder([1,2,3,4,5], [4,3,5,1,2]))
console.log(isPopOrder([1,2,3,4,5], [4,5,3,2,1]))
console.log(isPopOrder([1,2,3], [2,1,3]))

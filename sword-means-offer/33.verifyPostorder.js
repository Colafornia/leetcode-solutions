/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (!postorder) {
        return false
    }
    if (!postorder.length) {
        return true
    }
    const root = postorder.pop()
    let i = 0
    let left = []
    let right = []
    while (i < postorder.length) {
        if (postorder[i] > root) {
            break
        }
        left.push(postorder[i])
        i++
    }
    while (i < postorder.length) {
        if (postorder[i] < root) {
            return false
        }
        right.push(postorder[i])
        i++
    }
    let leftResult = true
    if (left.length) {
        leftResult = verifyPostorder(left)
    }
    let rightResult = true
    if (right.length) {
        rightResult = verifyPostorder(right)
    }
    return leftResult && rightResult
};

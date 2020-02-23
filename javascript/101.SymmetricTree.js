// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// iterative
var isSymmetric = function (root) {
    if (!root) {
        return true
    }
    let list = []
    list.push(root.left)
    list.push(root.right)
    while (list.length) {
        const n1 = list.pop()
        const n2 = list.pop()
        if (!n1 && !n2) {
            continue
        }
        if (!n1 || !n2 || n1.val !== n2.val) {
            return false
        }
        list = list.concat([n1.left, n2.right, n1.right, n2.left])
    }
    return true
};

// recursive
var isSymmetric2 = function (root) {
    if (!root) {
        return true
    }
    return isSymmetricHelper(root.left, root.right)
};

var isSymmetricHelper = function (left, right) {
    if (!left && !right) {
        return true
    }
    if (!left || !right || left.val !== right.val) {
        return false
    }
    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left)
}

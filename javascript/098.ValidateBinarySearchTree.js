// https://leetcode.com/problems/validate-binary-search-tree/

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
var isValidBST = function (root) {
    if (!root) {
        return true
    }
    let toVisit = []
    let current = root
    let pre = null
    while (current || toVisit.length) {
        while (current) {
            toVisit.push(current)
            current = current.left
        }
        current = toVisit.pop()
        if (pre && current.val <= pre.val) return false
        pre = current
        current = current.right;
    }
    return true
};

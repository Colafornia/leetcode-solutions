// https://leetcode.com/problems/subtree-of-another-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s) {
        return false
    }
    if (hasSubtree(s, t)) {
        return true
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};

var hasSubtree = function (root, sub) {
    if (!root && !sub) {
        return true
    }
    if (!root || !sub) {
        return false
    }
    if (root.val !== sub.val) {
        return false
    }
    return hasSubtree(root.left, sub.left) && hasSubtree(root.right, sub.right)
}

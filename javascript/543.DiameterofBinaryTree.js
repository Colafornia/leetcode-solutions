// https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let ans = 0
    var maxDepth = function (node) {
        if (!node) {
            return 0
        }
        let left = maxDepth(node.left)
        let right = maxDepth(node.right)
        ans = Math.max(ans, left + right)
        return Math.max(left, right) + 1
    }
    maxDepth(root)
    return ans
};

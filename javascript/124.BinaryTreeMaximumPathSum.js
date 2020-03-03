// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
var maxPathSum = function (root) {
    let ans = Number.MIN_VALUE
    var dfs = function (node) {
        if (!node) {
            return 0
        }
        let left = Math.max(dfs(node.left), 0)
        let right = Math.max(dfs(node.right), 0)
        ans = Math.max(ans, left + right + node.val, Math.max(left, right) + node.val)
        return Math.max(left, right) + node.val;
    }
    dfs(root)
    return ans
};

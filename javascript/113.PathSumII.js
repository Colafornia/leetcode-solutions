// https://leetcode.com/problems/path-sum-ii/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let ans = []
    if (!root) {
        return ans
    }
    var dfs = function (node, sum, path) {
        if (!node.left && !node.right && sum === node.val) {
            ans.push(path.concat(node.val))
            return
        }
        if (node.left) {
            dfs(node.left, sum - node.val, path.concat(node.val))
        }
        if (node.right) {
            dfs(node.right, sum - node.val, path.concat(node.val))
        }
    }
    dfs(root, sum, [])
    return ans
};


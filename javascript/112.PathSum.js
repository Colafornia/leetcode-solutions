// https://leetcode-cn.com/problems/path-sum/

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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return sum === root.val;
    }
    var leftResult;
    var rightResult;
    if (root.left) {
        leftResult = hasPathSum(root.left, sum - root.val);
    }
    if (root.right) {
        rightResult = hasPathSum(root.right, sum - root.val);
    }
    return Boolean(leftResult || rightResult);
};

var hasPathSum2 = function (root, sum) {
    if (!root) {
        return false
    }
    let ans = false
    var dfs = function (node, sum) {
        if (!node.left && !node.right && node.val === sum) {
            ans = true
        }
        if (node.left) {
            dfs(node.left, sum - node.val)
        }
        if (node.right) {
            dfs(node.right, sum - node.val)
        }
    }
    dfs(root, sum)
    return ans
};

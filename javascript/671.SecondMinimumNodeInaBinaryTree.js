// https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/

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

var findSecondMinimumValue = function (root) {
    if (!root) {
        return -1
    }
    if (!root.left && !root.right) {
        return -1
    }
    let left = root.left.val
    let right = root.right.val
    if (left === root.val) {
        left = findSecondMinimumValue(root.left)
    }
    if (right === root.val) {
        right = findSecondMinimumValue(root.right)
    }
    if (left !== -1 && right !== -1) {
        return Math.min(left, right)
    } else if (left === -1) {
        return right
    } else {
        return left
    }
};

var findSecondMinimumValue2 = function (root) {
    var ans = [];
    var traverseNode = function (node) {
        if (node) {
            if (!ans.includes(node.val)) {
                ans.push(node.val);
            }
            traverseNode(node.left);
            traverseNode(node.right);
        }
    }
    traverseNode(root);
    ans = ans.sort((a, b) => a - b);
    return ans[1] || -1;
};
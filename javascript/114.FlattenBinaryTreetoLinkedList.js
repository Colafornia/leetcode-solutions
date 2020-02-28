// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) {
        return
    }
    let current = root
    while (current) {
        if (current.left) {
            let pre = current.left
            while (pre.right) {
                pre = pre.right
            }
            pre.right = current.right
            current.right = current.left
            current.left = null
        }
        current = current.right
    }
};
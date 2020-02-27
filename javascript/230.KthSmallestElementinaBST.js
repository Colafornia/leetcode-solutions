// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let stack = []
    let arr = []
    let current = root
    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        if (current) {
            arr.push(current.val)
        }
        if (arr.length === k) {
            return current.val
        }
        current = current.right
    }
};

var kthSmallest2 = function (root, k) {
    var result = [];
    var traverseNode = function (node) {
        if (node) {
            traverseNode(node.left);
            result.push(node.val);
            traverseNode(node.right);
        }
    }
    traverseNode(root);
    return result.slice(k - 1, k);
};

// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let ans = []
    let toVisit = []
    toVisit.push(root)
    while (toVisit.length) {
        const node = toVisit.pop()
        // put in the tail
        ans.unshift(node.val)
        if (node.left) {
            toVisit.push(node.left)
        }
        if (node.right) {
            toVisit.push(node.right)
        }
    }
    return ans
};

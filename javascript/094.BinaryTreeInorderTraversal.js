// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
var inorderTraversal = function(root) {
    let ans = []
    let current = root
    let toVisit = []
    while (current || toVisit.length) {
        while(current) {
            toVisit.push(current)
            current = current.left
        }
        current = toVisit.pop()
        ans.push(current.val)
        current = current.right
    }
    return ans
};

var inorderTraversal2 = function(root) {
    let ans = []
    inOrder(root, ans)
    return ans
};

var inOrder = function(root, nodes) {
    if (!root) {
        return
    }
    inOrder(root.left, nodes)
    nodes.push(root.val)
    inOrder(root.right, nodes)
}

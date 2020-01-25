// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder || !postorder || !inorder.length || !postorder.length) {
        return null
    }
    return buildTreeHelper(inorder, postorder, postorder.length - 1, 0, inorder.length - 1)
};

var buildTreeHelper = function (inorder, postorder, postEnd, inStart, inEnd) {
    if (postEnd > postorder.length - 1 || inStart > inEnd) {
        return null
    }
    const current = new TreeNode(postorder[postEnd])
    let idx = -1
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === postorder[postEnd]) {
            idx = i
            break
        }
    }
    if (idx === -1) {
        return null
    }
    current.left = buildTreeHelper(inorder, postorder, postEnd - (inEnd - idx + 1), inStart, idx - 1)
    current.right = buildTreeHelper(inorder, postorder, postEnd - 1, idx + 1, inEnd)
    return current
}
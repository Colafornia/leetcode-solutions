// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder || !inorder || !preorder.length || !inorder.length) {
        return null
    }
    return buildTreeHelper(preorder, inorder, 0, 0, inorder.length - 1)
};

function buildTreeHelper (preorder, inorder, preStart, inStart, inEnd) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null
    }
    const currentRoot = new TreeNode(preorder[preStart])
    let idx = -1
    for(var i = 0; i < inorder.length; i++) {
        if(inorder[i] === preorder[preStart]) {
            idx = i;
            break;
        }
    }
    if (idx === -1) {
        return null
    }
    currentRoot.left = buildTreeHelper(preorder, inorder, preStart + 1, inStart, idx - 1)
    currentRoot.right = buildTreeHelper(preorder, inorder, preStart + (idx - inStart + 1), idx+1, inEnd)
    return currentRoot
}

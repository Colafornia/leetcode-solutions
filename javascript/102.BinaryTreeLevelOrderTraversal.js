// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = []
    let layer = []
    if (!root) {
        return ans
    }
    layer.push(root)
    while (layer.length) {
        let layerNodes = []
        let newLayer = []
        layer.forEach((node) => {
            layerNodes.push(node.val)
            node.left && newLayer.push(node.left)
            node.right && newLayer.push(node.right)
        })
        ans.push(layerNodes)
        layer = newLayer
    }
    return ans
};

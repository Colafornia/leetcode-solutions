// https://leetcode.com/problems/binary-tree-right-side-view/

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
var rightSideView = function (root) {
    if (!root) {
        return []
    }
    let layer = []
    let ans = []
    layer.push(root)
    while (layer.length) {
        const node = layer[layer.length - 1]
        ans.push(node.val)
        let newLayer = []
        layer.forEach((node) => {
            if (node.left) {
                newLayer.push(node.left)
            }
            if (node.right) {
                newLayer.push(node.right)
            }
        })
        layer = newLayer
    }
    return ans
};

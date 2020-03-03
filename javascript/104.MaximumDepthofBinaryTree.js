// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

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
var maxDepth = function(root, depth) {
  if (!depth) {
    depth = 0
  }
  if (!root) {
    return depth
  }
  return  Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
};


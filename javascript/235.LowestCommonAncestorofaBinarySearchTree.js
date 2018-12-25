// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var val = root.val;
  if (p.val < val && q.val < val) {
      return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > val && q.val > val) {
      return lowestCommonAncestor(root.right, p, q);
  } else {
      return root;
  }
};
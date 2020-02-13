// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
 * @return {boolean}
 */

// use a sorted array to save the values of the nodes in the BST
// by using an inorder traversal.
var findTarget1 = function(root, k) {
    let sortedList = []
    traverseNode(root, (val) => {
      sortedList.push(val)
    })
    let left = 0
    let right = sortedList.length - 1
    while (left < right) {
      const sum = sortedList[left] + sortedList[right]
      if (sum === k) {
        return true
      } else if (sum < k) {
        left++
      } else {
        right--
      }
    }
    return false
};

var traverseNode = function(node, cb) {
  if (!node) {
    return
  }
  traverseNode(node.left, cb)
  cb(node.val)
  traverseNode(node.right, cb)
}

// dfs
var findTarget2 = function(root, k) {
  const hash = {}
  return dfs(root, hash, k)
};

var dfs = function(node, hash, k) {
if (!node) {
  return false
}
if (hash.hasOwnProperty(k - node.val)) {
  return true
}
hash[node.val] = true
return dfs(node.left, hash, k) || dfs(node.right, hash, k)
}

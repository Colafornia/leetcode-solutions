// https://leetcode.com/problems/house-robber-iii/

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

// https://leetcode.com/problems/house-robber-iii/discuss/79330/Step-by-step-tackling-of-the-problem
var rob1 = function (root) {
    if (!root) {
        return 0
    }
    let val = 0
    if (root.left) {
        val += rob(root.left.left) + rob(root.left.right)
    }
    if (root.right) {
        val += rob(root.right.left) + rob(root.right.right)
    }
    return Math.max(val + root.val, rob(root.left) + rob(root.right))
};
var rob2 = function (root) {
    return robHelper(root, new Map())
};

var robHelper = function (root, cache) {
    if (!root) {
        return 0
    }
    if (cache.has(root)) {
        return cache.get(root)
    }
    let val = 0
    if (root.left) {
        val += robHelper(root.left.left, cache) + robHelper(root.left.right, cache)
    }
    if (root.right) {
        val += robHelper(root.right.left, cache) + robHelper(root.right.right, cache)
    }
    const ans = Math.max(val + root.val, robHelper(root.left, cache) + robHelper(root.right, cache))
    cache.set(root, ans)
    return ans
}

var rob3 = function (root) {
    const ans = robHelper(root)
    return Math.max(ans[0], ans[1])
};

var robHelper = function (root, cache) {
    // first item means the the node is not robbed
    // second item means that the node is robbed
    let ans = new Array(2).fill(0)
    if (!root) {
        return ans
    }
    const left = robHelper(root.left)
    const right = robHelper(root.right)
    // we can rob the left or right or not
    ans[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // we rob the root, we can't rob the left or right
    ans[1] = root.val + left[0] + right[0]
    return ans
}

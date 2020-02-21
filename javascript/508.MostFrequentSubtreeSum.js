// https://leetcode.com/problems/most-frequent-subtree-sum/

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
var findFrequentTreeSum = function (root) {
    let hash = {}
    let maxCount = 0
    var dfs = function (root) {
        if (!root) {
            return 0
        }
        const sum = dfs(root.left) + dfs(root.right) + root.val
        if (hash.hasOwnProperty(sum)) {
            hash[sum] = hash[sum] + 1
        } else {
            hash[sum] = 1
        }
        maxCount = Math.max(maxCount, hash[sum])
        return sum
    }

    dfs(root, hash, maxCount)

    let ans = []
    for (const sum in hash) {
        if (hash[sum] === maxCount) {
            ans.push(sum)
        }
    }
    return ans
};
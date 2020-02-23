// https://leetcode.com/problems/binary-tree-preorder-traversal/

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
var preorderTraversal = function (root) {
    let ans = []
    let toVisit = []
    let current = root
    while (current) {
        ans.push(current.val)
        if (current.right) {
            toVisit.push(current.right)
        }
        current = current.left
        if (!current && toVisit.length) {
            current = toVisit.pop()
        }
    }
    return ans
};

// similar to method 1
var preorderTraversal2 = function (root) {
    let ans = []
    let toVisit = []
    let current = root
    while (current || toVisit.length) {
        if (current) {
            ans.push(current.val)
            toVisit.push(current.right)
            current = current.left
        } else {
            current = toVisit.pop()
        }
    }
    return ans
};

// recursive thinking
var preorderTraversal3 = function (root) {
    if (!root) {
        return []
    }
    let ans = []
    let toVisit = []
    toVisit.push(root)
    while (toVisit.length) {
        const node = toVisit.pop()
        ans.push(node.val)
        if (node.right) {
            toVisit.push(node.right)
        }
        if (node.left) {
            toVisit.push(node.left)
        }
    }
    return ans
};
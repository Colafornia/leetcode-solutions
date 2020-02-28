// https://leetcode.com/problems/delete-node-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) {
        return null
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    } else {
        if (!root.left && !root.right) {
            root = null
            return root
        }
        if (!root.left) {
            root = root.right
            return root
        } else if (!root.right) {
            root = root.left
            return root
        }
        // 移除右侧子树中最小节点，并用其代替被移除节点
        const aux = minNode(root.right)
        root.val = aux.val
        root.right = deleteNode(root.right, aux.val)
        return root
    }
};

function minNode(node) {
    if (node) {
        while (node && node.left) {
            node = node.left
        }
        return node
    } else {
        return null
    }
}

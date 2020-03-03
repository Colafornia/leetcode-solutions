// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let nodeMap = new Map()
    let cur = head
    while (cur) {
        nodeMap.set(cur, new Node(cur.val))
        cur = cur.next
    }
    // set the tail
    nodeMap.set(null, null)
    cur = head
    while (cur) {
        nodeMap.get(cur).next = nodeMap.get(cur.next)
        nodeMap.get(cur).random = nodeMap.get(cur.random)
        cur = cur.next
    }

    return nodeMap.get(head)
};

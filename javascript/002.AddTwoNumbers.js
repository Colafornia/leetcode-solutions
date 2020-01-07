// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0)
    let cursor = null
    let increment = 0
    while (l1 || l2) {
        var v1 = l1 ? l1.val : 0
        var v2 = l2 ? l2.val : 0
        var node = new ListNode(0)
        var added = (v1 + v2 + increment)
        node.val = added % 10
        increment = Math.floor(added / 10)
        if (!cursor) {
            cursor = result
            cursor.val = node.val
        } else {
            cursor.next = node
            cursor = node
        }
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    if (increment) {
        cursor.next = new ListNode(increment)
    }
    return result
};
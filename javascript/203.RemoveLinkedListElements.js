// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let current = head
    let pre = null
    while (current) {
        if (current.val === val) {
            if (pre) {
                pre.next = current.next
            } else {
                head = head.next
            }
        } else {
            // if current.val === val, then delete current, no need to move pre
            pre = current
        }
        current = current.next
    }
    return head
};
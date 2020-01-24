// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let newHead = new ListNode(0)
    newHead.next = head
    let slow = newHead
    let fast = newHead
    while (n > 0) {
        fast = fast.next
        n--
    }
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return newHead.next
};

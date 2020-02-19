// https://leetcode.com/problems/reverse-linked-list-ii/

// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (m === n || !head) {
        return head
    }
    let dummy = new ListNode(null)
    dummy.next = head
    let pre = dummy
    let i = 1
    while (i < m) {
        pre = pre.next
        i++
    }
    let current = pre.next
    let then = current.next
    while (i < n) {
        current.next = then.next
        then.next = pre.next
        pre.next = then
        then = current.next
        i++
    }
    return dummy.next
};

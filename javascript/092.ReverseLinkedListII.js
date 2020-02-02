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
    let fakeHead = new ListNode(null)
    fakeHead.next = head
    let count = 1
    let prev = fakeHead
    let current = fakeHead.next
    while (count < m) {
        prev = current
        current = current.next
        count++
    }
    let first = prev
    while (count <= n) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
        count++
    }
    first.next.next = current
    first.next = prev
    return fakeHead.next
};
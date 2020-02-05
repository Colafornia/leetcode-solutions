// https://leetcode.com/problems/insertion-sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (!head) {
        return head
    }
    let newHead = new ListNode(-Number.MAX_VALUE)
    let pre = newHead
    let current = head
    let next = null
    while (current) {
        next = current.next
        while (pre.next && pre.next.val < current.val) {
            pre = pre.next
        }
        current.next = pre.next
        pre.next = current
        pre = newHead
        current = next
    }
    return newHead.next
};

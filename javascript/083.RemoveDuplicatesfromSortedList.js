// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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
var deleteDuplicates = function (head) {
    if (!head) {
        return head
    }
    let current = head
    while (current) {
        let next = current.next
        while (next && next.val === current.val) {
            current.next = next.next
            next = current.next
        }
        current = current.next
    }
    return head
};
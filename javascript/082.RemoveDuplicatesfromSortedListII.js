// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

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
    let newHead = new ListNode(null)
    newHead.next = head
    let prev = newHead
    let current = newHead.next
    while (current) {
        let next = current.next
        if (next && current.val === next.val) {
            const duplicateVal = current.val
            while (current && current.val === duplicateVal) {
                current = current.next
            }
            prev.next = current
        } else {
            prev = current
            current = current.next
        }
    }
    return newHead.next
};

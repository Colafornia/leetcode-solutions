// https://leetcode.com/problems/linked-list-cycle-ii/

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
var detectCycle = function (head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }
    // no cycle in the linked list
    if (!fast || !fast.next) {
        return null
    }
    // m is the distance between head and cycle start node
    // n is the perimeter of the cycle
    // x is the distance between meet node and cycle start node
    // m = x + kn
    // k is a coefficient means the node may run k cycles
    // between two pointers meet
    fast = head
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
};

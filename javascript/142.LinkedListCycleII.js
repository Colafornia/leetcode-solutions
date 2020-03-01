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

// common method
var detectCycle = function (head) {
    let fast = head
    let slow = head
    let cyclePerimeter = 0
    // detect the cycle whether exists
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        // there is a cycle
        // get the perimeter of cycle
        if (fast === slow) {
            slow = slow.next
            cyclePerimeter++
            while (slow !== fast) {
                slow = slow.next
                cyclePerimeter++
            }
            break
        }
    }
    if (!cyclePerimeter) {
        return null
    }
    // rerun
    // fast runs perimeter distance first
    // then slow runs
    // they will meet at the connect point
    // slow : run x
    // fast : run perimeter + x
    fast = head
    slow = head
    while (cyclePerimeter) {
        fast = fast.next
        cyclePerimeter--
    }
    while (fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};
var detectCycle2 = function (head) {
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

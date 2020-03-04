// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA) {
        return headA
    }
    if (!headB) {
        return headB
    }
    let l1 = 0
    let l2 = 0
    let curA = headA
    let curB = headB
    while (curA) {
        curA = curA.next
        l1++
    }
    while (curB) {
        curB = curB.next
        l2++
    }
    curA = headA
    curB = headB
    if (l1 !== l2) {
        let diff = Math.abs(l1 - l2)
        if (l1 > l2) {
            while (diff) {
                curA = curA.next
                diff--
            }
        } else {
            while (diff) {
                curB = curB.next
                diff--
            }
        }
    }
    while (curA && curB && curA !== curB) {
        curA = curA.next
        curB = curB.next
    }
    return curA
};

var getIntersectionNode2 = function (headA, headB) {
    if (!headA) {
        return headA
    }
    if (!headB) {
        return headB
    }
    let curA = headA
    let curB = headB
    while (curA && curB) {
        if (curA === curB) {
            return curA
        }
        curA = curA.next
        curB = curB.next
        // if both of them are null
        // loop will be endless
        if (curA == curB) {
            return curA
        }
        if (!curA) {
            curA = headB
        }
        if (!curB) {
            curB = headA
        }
    }
    return curA
};
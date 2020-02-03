// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
    if (!lists || !lists.length) {
        return null
    }
    if (lists.length === 1) {
        return lists[0]
    }
    let newHead = lists[0]
    let i = lists.length - 1
    while (i > 0) {
        newHead = merge2Lists(newHead, lists[i])
        i--
    }
    return newHead
};

var merge2Lists = function (l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    let newHead = new ListNode(null)
    if (l1.val < l2.val) {
        newHead = l1
        newHead.next = merge2Lists(l1.next, l2)
    } else {
        newHead = l2
        newHead.next = merge2Lists(l1, l2.next)
    }
    return newHead
}

var mergeKLists2 = function (lists) {
    if (!lists || !lists.length) {
        return null
    }
    if (lists.length === 1) {
        return lists[0]
    }
    return partition(lists, 0, lists.length - 1)
};

var partition = function (lists, left, right) {
    if (left === right) {
        return lists[left]
    }
    if (left < right) {
        const mid = Math.floor(right + (left - right) / 2)
        const l1 = partition(lists, left, mid)
        const l2 = partition(lists, mid + 1, right)
        return merge2Lists(l1, l2)
    } else {
        return null
    }
}

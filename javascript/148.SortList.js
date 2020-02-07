// https://leetcode.com/problems/sort-list/

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
// Merge Sort Top-Down
// Time: O(nlogn)
// Space: O(logn)
var sortList1 = function (head) {
    if (!head || !head.next) {
        return head
    }
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = head.next
        fast = fast.next.next
    }
    const mid = slow.next
    slow.next = null
    return merge(sortList1(head), sortList1(mid))
};

var merge = function (l1, l2) {
    let newHead = new ListNode(null)
    let tail = newHead
    while (l1 && l2) {
        if (l1.val > l2.val) {
            const tmp = l1
            l1 = l2
            l2 = tmp
        }
        tail.next = l1
        l1 = l1.next
        tail = tail.next
    }
    if (l1) {
        tail.next = l1
    }
    if (l2) {
        tail.next = l2
    }
    return newHead.next
}

// Bottom Up
// Time complexity: O(nlogn)
// Space complexity: O(1)
var sortList2 = function (head) {
    // (D) -> some_head -> node1 -> ...
    let dummy = new ListNode(null);
    dummy.next = head;

    // get the length of list
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    // i=i*2 because every iteration, the list size of what need be merged is doubled
    for (let i = 1; i < length; i = i * 2) {
        // (D) -> some_head -> node1 -> ...
        let prev = dummy;
        // D -> (some_head) -> node1 -> ...
        let current = dummy.next;

        while (current) {
            // left = the beginning of the partial list
            let left = current;
            // right = split the list by i, also cut the link for left
            let right = split(left, i);
            // current = rest of the list , also cut the link for right
            current = split(right, i);
            // keep appending merged list
            merged = merge(left, right);
            // link the list
            prev.next = merged.head
            prev = merged.tail
        }
    }
    return dummy.next;
};

// split a linked list by n, and return the rest of the list
var split = function (node, n) {
    while (n > 1 && node) {
        node = node.next;
        n--;
    }
    let rest = node ? node.next : null;
    if (node) node.next = null;
    return rest;
}

var merge = function (l1, l2) {
    let newHead = new ListNode(null)
    let tail = newHead
    while (l1 && l2) {
        if (l1.val > l2.val) {
            const tmp = l1
            l1 = l2
            l2 = tmp
        }
        tail.next = l1
        l1 = l1.next
        tail = tail.next
    }
    tail.next = l1 ? l1 : l2;
    while (tail.next) tail = tail.next
    return {
        head: newHead.next,
        tail,
    }
}
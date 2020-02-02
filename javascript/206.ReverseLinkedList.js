// https://leetcode.com/problems/reverse-linked-list/

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

// 方法1： 三指针遍历链表
// 先将头元素的next指向空
// 用 next 变量存储第三个元素避免链表断掉
var reverseList1 = function (head) {
    let newHead = null
    let current = head
    let pre = null
    while (current) {
        let next = current.next
        if (!next) {
            newHead = current
        }
        current.next = pre
        pre = current
        current = next
    }
    return newHead
};
// 方法2：递归
// 元素进行交替处理的思路与1类似，实现方式不同
var reverseList2 = function (head) {
    return reverseHelper(null, head)
};

var reverseHelper = function (pre, current) {
    if (!current) {
        return current
    }
    let next = current.next
    current.next = pre
    pre = current
    if (!next) {
        return current
    }
    current = next
    return reverseHelper(pre, current)
}
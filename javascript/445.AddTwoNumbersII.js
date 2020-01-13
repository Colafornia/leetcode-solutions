// https://leetcode.com/problems/add-two-numbers-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const list1 = []
  const list2 = []
  let sum = 0
  let cursor = null
  while(l1) {
    list1.push(l1.val)
    l1 = l1.next
  }
  while(l2) {
    list2.push(l2.val)
    l2 = l2.next
  }
  while(list1.length || list2.length) {
    if (list1.length) {
      sum += list1.pop()
    }
    if (list2.length) {
      sum += list2.pop()
    }
    const head = new ListNode(sum % 10)
    head.next = cursor
    cursor = head
    sum = Math.floor(sum / 10)
  }
  if (sum > 0) {
    const head = new ListNode(sum)
    head.next = cursor
    cursor = head
  }
  return cursor || new ListNode(0)
}

// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited = head
    let current = head
    while(current && current.next) {
      if (current.next === head) {
        return true
      }
      current = current.next
      // every visited node is pointed to head
      // so, if current.next === head, there's a cycle
      // current is pointed to a visited node
      visited.next = head
      visited = current
    }
    return false
};
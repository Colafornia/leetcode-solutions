# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        if m == n:
          return head
        newHead = ListNode(None)
        newHead.next = head
        pre = newHead
        for i in range(m - 1):
          pre = pre.next

        start = pre.next
        then = start.next
        for i in range(n - m):
          start.next = then.next
          then.next = pre.next
          pre.next = then
          then = start.next

        return newHead.next

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import heapq

class Solution:
    def mergeKLists(self, lists):
        if not lists or len(lists) == 0:
            return None

        heap = []
        counter = 0  # To avoid comparison issues when node values are equal

        for node in lists:
            if node:
                heapq.heappush(heap, (node.val, counter, node))
                counter += 1

        dummy = ListNode(0)
        tail = dummy

        while heap:
            val, _, node = heapq.heappop(heap)
            tail.next = node
            tail = tail.next
            if node.next:
                heapq.heappush(heap, (node.next.val, counter, node.next))
                counter += 1

        return dummy.next

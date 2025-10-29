/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head !== null && head.next !== null) {
    const first = head;
    const second = head.next;

    // Swap
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // Move pointers
    prev = first;
    head = first.next;
  }

  return dummy.next;
};
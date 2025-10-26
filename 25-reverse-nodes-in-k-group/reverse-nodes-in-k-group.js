/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var reverseKGroup = function(head, k) {
  if (!head || k === 1) return head;

  const dummy = new ListNode(0, head);
  let pre = dummy;
  let end = dummy;

  // Helper function to reverse a linked list
  const reverseList = function(head) {
    let prev = null;
    while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  };

  while (true) {
    // Move `end` pointer k steps ahead
    for (let i = 0; i < k && end; i++) end = end.next;
    if (!end) break;

    let start = pre.next;
    let next = end.next;
    end.next = null;

    // Reverse the k-group
    pre.next = reverseList(start);
    start.next = next;

    // Move pointers forward
    pre = start;
    end = pre;
  }

  return dummy.next;
};

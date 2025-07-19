/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 // Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


 function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}


var reverseList = function(head) {
  // 1️⃣ Edge Case: If the list is empty or has only one node
  if (!head || !head.next) return head;

  // 2️⃣ Initialize pointers
  let prev = null;
  let current = head;

  // 3️⃣ Traverse and reverse
  while (current !== null) {
    let nextNode = current.next; // Save next node
    current.next = prev;         // Reverse the pointer
    prev = current;              // Move prev forward
    current = nextNode;          // Move current forward
  }

  // 4️⃣ Return new head (prev)
  return prev;
};

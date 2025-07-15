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
class ListNode { constructor(value) { this.val = value; this.next = null; } }
function createLinkedList(arr) { if (arr.length === 0) return null; const head = new ListNode(arr[0]); let current = head; for (let i = 1; i < arr.length; i++) { current.next = new ListNode(arr[i]); current = current.next; } return head; }
function middleNode(head) { let slow = head, fast = head; while (fast && fast.next) { slow = slow.next; fast = fast.next.next; } return slow; }
function printListFromNode(node) { const result = []; while (node) { result.push(node.val); node = node.next; } console.log(result); }
// Test Case
const head = createLinkedList([1, 2, 3, 4, 5, 6]);
const midNode = middleNode(head);
printListFromNode(midNode); // Output: [4, 5, 6]

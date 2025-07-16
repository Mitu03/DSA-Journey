/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Step 1: Move fast n+1 steps ahead (so slow is before the node to delete)
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Step 2: Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 3: Delete the nth node from end
    slow.next = slow.next.next;

    // Return the updated list
    return dummy.next;
}

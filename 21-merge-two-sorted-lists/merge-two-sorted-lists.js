/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // dummy head
    let current = dummy;

    // Traverse both lists
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;   // connect smaller node
            list1 = list1.next;     // move forward in list1
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;     // move the current pointer
    }

    // At least one list is now null
    current.next = list1 !== null ? list1 : list2;

    return dummy.next;  // return merged list starting after dummy node
};

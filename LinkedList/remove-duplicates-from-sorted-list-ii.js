/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
var deleteDuplicates = function (head) {
  var current = head;
  var prev = null;
  var temp = null;

  while (current) {
    if (current?.val == current?.next?.val || current?.val == temp?.val) {
      if (!prev) {
        temp = head;
        head = head.next;
      } else {
        temp = current;
        prev.next = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next;
  }

  return head;
};

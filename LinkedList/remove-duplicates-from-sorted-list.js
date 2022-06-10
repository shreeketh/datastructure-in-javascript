// https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/
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
var deleteDuplicates = function (head) {
  var prev = head;
  var current = head?.next;
  while (current) {
    if (current.val === prev?.val) {
      prev.next = current?.next;
      current = current?.next;
      prev = prev;
    } else {
      current = current?.next;
      prev = prev?.next;
    }
  }
  return head;
};

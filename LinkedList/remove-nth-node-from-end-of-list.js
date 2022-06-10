/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
var removeNthFromEnd = function (head, n) {
  var start = head;
  var end = head;
  var res = null;
  var pointer = res;

  for (var x = 0; x < n; x++) {
    end = end.next;
  }

  while (end) {
    if (!res) {
      res = new ListNode(start.val);
      pointer = res;
    } else {
      res.next = new ListNode(start.val);
      res = res.next;
    }
    start = start.next;
    end = end.next;
  }

  if (res) {
  }
  // skip one node
  start = start.next;

  // push others
  while (start != end) {
    if (!res) {
      res = new ListNode(start.val);
      pointer = res;
    } else {
      res.next = new ListNode(start.val);
      res = res.next;
    }
    start = start.next;
  }

  return pointer;
};

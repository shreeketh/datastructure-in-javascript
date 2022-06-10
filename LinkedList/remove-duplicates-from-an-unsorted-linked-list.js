/**
 * https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/
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
var deleteDuplicatesUnsorted = function (head) {
  // map to keep count of number of occurances
  var map = {};
  var current = head;

  // walk through all nodes to get the count
  while (current) {
    if (map[current.val]) {
      map[current.val] = map[current.val] + 1;
    } else {
      map[current.val] = 1;
    }
    current = current?.next;
  }

  var prev = null;
  current = head;

  while (current) {
    if (map[current.val] == 1) {
      prev = current;
      current = current.next;
    } else {
      // if it is very first node, shift head to next
      if (!prev) {
        head = head.next;
      } else {
        prev.next = current?.next;
      }
      current = current?.next;
    }
  }

  return head;
};


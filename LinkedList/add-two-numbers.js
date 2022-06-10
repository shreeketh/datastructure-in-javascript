/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var res = null;
  var resPointer = null;

  while (l1 || l2) {
    var newNode = new ListNode();
    var tmp = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry;
    newNode.val = tmp % 10;
    carry = Math.floor(tmp / 10);

    if (!res) {
      res = newNode;
      resPointer = res;
    } else {
      res.next = newNode;
      res = res.next;
    }
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (carry > 0) {
    var newNode = new ListNode(carry);
    res.next = newNode;
  }

  return resPointer;
};

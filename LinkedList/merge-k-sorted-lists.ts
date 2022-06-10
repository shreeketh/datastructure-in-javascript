/**
 * NOT WORKING
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  var res = null;
  var resPointer = null;

  var continueIteration = true;

  while (continueIteration) {
    var cntn = false;
    for (var x = 0; x < lists.length; x++) {
      if (!res) {
        res = new ListNode(lists[x].val);
        resPointer = res;
        lists[x] = lists[x].next;
      } else {
        if (lists[x]?.val) {
          res.next = new ListNode(lists[x].val);
        }
        lists[x] = lists[x]?.next;
      }
      if (lists[x]) {
        cntn = true;
      }
    }
    continueIteration = cntn;
  }

  return resPointer;
};


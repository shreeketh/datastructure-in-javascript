/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  var sum = -Infinity;
  var level = 0;
  var ans = 0;

  var queue = [root];

  while (queue.length) {
    var tempQueue = [];
    var tempSum = -Infinity;
    level++;

    while (queue.length) {
      var node = queue.pop();
      if (tempSum == -Infinity) {
        tempSum = node.val;
      } else {
        tempSum += node.val;
      }
      node.left && tempQueue.push(node.left);
      node.right && tempQueue.push(node.right);
    }
    queue = tempQueue;
    if (tempSum > sum) {
      ans = level;
      sum = tempSum;
    }
  }

  return ans;
};

/**
 * https://leetcode.com/problems/flip-equivalent-binary-trees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    // check if both are null
  if (root1 == null && root2 == null) {
    return true;
  }

  // any one is null or values are ot equal
  if (root1 == null || root2 == null || root1.val != root2.val) {
    return false;
  }

  // check both left and right once
  return (
    (flipEquiv(root1.left, root2.right) &&
      flipEquiv(root1.right, root2.left)) ||
    (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right))
  );
};

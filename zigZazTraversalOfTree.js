/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    var q = []
    var res = []
    var level = 1

    if (root) {
        q.push(root)
    }

    while (q.length) {
        level++
        var size = q.length;
        var temp = []

        for (var i = 0; i < size; i++) {
            var node = q.shift()

            if (node.right) {
                q.push(node.right)
            }

            if (node.left) {
                q.push(node.left)
            }

            temp.push(node.val)

            if (i == size - 1) {
                if (level % 2 == 0) {
                    res.push(temp.reverse())
                } else {
                    res.push(temp)
                }
            }
        }
    }

    return res
};
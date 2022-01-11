/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Need to revisit
var boundaryOfBinaryTree = function (root) {
    var q = []
    var res = []
    var rightView = []

    if (root) {
        q.push(root)
    }

    while (q.length) {
        var size = q.length;

        for (var i = 0; i < size; i++) {
            var node = q.shift()

            if (node.left) {
                q.push(node.left)
            }

            if (node.right) {
                q.push(node.right)
            }

            if (i == size - 1 || i == 0) {
                if (i == 0) {
                    res.push(node.val)
                } else {
                    rightView.push(node.val)
                }

            } else if (!node.left && !node.right) {
                res.push(node.val)
            }
        }
    }

    return res.concat(rightView.reverse())

};
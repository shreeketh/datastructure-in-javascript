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
 * @return {number}
 */
var maxPathSum = function (root) {
    var maxSum = -Infinity

    function getSum(node) {
        var leftSum = 0
        var rightSum = 0
        if (node.left) {
            leftSum += getSum(node.left)
        }

        if (node.right) {
            rightSum += getSum(node.right)
        }

        var sum = node.val + rightSum + leftSum

        //       if(sum < leftSum){
        //           maxSum = Math.max(leftSum, maxSum)
        //       } 

        //       if(sum < rightSum){
        //           maxSum = Math.max(rightSum, maxSum)
        //       }

        if (sum < node.val) {
            maxSum = Math.max(node.val, maxSum)
        }
        maxSum = Math.max(sum, maxSum)
        return sum
    }

    getSum(root)

    return maxSum
};

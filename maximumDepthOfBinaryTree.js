/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

//Time Taken - 4:39
 var maxDepth = function(root) {
    
    function findDepth(node){
        if(!node){
            return 0
        }
        if(node.left == null && node.right==null){
            return 1
        }
        
        var left = 0
        var right = 0
        
        if(node.left != null){
            left = findDepth(node.left) + 1
        }
        
        if(node.right != null){
            right = findDepth(node.right) + 1
        }
        
        return Math.max(left, right)
    }
    
    return findDepth(root)
    
};
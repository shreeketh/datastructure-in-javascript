/**
 * https://leetcode.com/problems/find-bottom-left-tree-value/submissions/
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
 var findBottomLeftValue = function(root) {
    var q = []
    var res
    
    if(root){
        q.push(root)
    }
    
    while(q.length){
        var size=q.length;
        
        for(var i=0; i<size; i++){
            var node=q.shift()
            
            if(node.right){
                q.push(node.right)
            }
            
            if(node.left){
                q.push(node.left)
            }
            
            res = node.val
        }
    }
    
    return res
};
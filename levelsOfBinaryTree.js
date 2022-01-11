/**
 * https://leetcode.com/problems/find-leaves-of-binary-tree/
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
 var findLeaves = function(root) {
    var result = []
    
    // Go to next level and see whether leaf or not
    var checkWhetherHasLeaf = (node)=>{
        var res = []
        if(node.left){
            if(!node.left.left && !node.left.right){
                res.push(node.left.val)
                node.left=null
            }
        }
        
         if(node.right){
            if(!node.right.left && !node.right.right){
                res.push(node.right.val)
                node.right=null
            }
        }
        
        return res
    }
    
    // Level order traversal
    var traverseRecursively = ()=>{
        var res = []
        var queue=[root]
        while(queue.length){
            var node = queue.pop()
            res = [...res, ...checkWhetherHasLeaf(node)]
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        
        return res
    }    
    

    // Recursive process
    while(root) {
        //base condition
         if(!root.left && !root.right){
            result.push([root.val])
            break
        }
        result.push(traverseRecursively(root))
    }
    
    return result
};
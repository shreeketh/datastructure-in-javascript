class Node {
    constructor(val, left, right){
        this.value = val;
        this.left = left;
        this.right = right
    }
}

// Create a dummy tree
var tree = new Node(5)
tree.left = new Node(6)
tree.right = new Node(7)

tree.left.left = new Node(8)
tree.left.right = new Node(9)

tree.right.left = new Node(10)
tree.right.right = new Node(11)

tree.right.right.left = new Node(12)
tree.right.right.right = new Node(13)

var longest = 0
function findLongestPath(root){
    if(!root || root.value === null){
        return 0
    }
    const lft = findLongestPath(root.left) 
    const rgt = findLongestPath(root.right)

    longest = Math.max(longest, (lft+rgt+1))
// Don't forget to make +1
    return(Math.max(lft, rgt)+1)
}

findLongestPath(tree)

console.log(longest)

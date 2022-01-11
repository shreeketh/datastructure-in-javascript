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


function preOrder(node){
    if(node.value === null){
        return
    }
    console.log(node.value)

    preOrder(node.left)
    preOrder(node.right)
}

function inOrder(node){
    if(node.value === null){
        return
    }

    inOrder(node.left)
    console.log(node.value)
    inOrder(node.right)
}


function postOrder(node){
    if(node.value === null){
        return
    }

    postOrder(node.left)
    postOrder(node.right)
    console.log(node.value)
}


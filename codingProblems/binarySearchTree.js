class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root; 
            //cause we gonna have to traverse this node
            while(true){
                if(value < currentNode.value) {
                    //Left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        //if there is no current left node, 
                        // assign current node to newnode
                        return this;
                    }
                    currentNode = currentNode.left
                    //if there is a node, current node will be the left node 
                } else {
                    //Right 
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }
    remove(value){
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode) {
            if (value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value){
                //we have a match, get to work!

                //Option 1: no right child:
                if (currentNode.right === null){
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current
                        //left child, a child of parent
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;

                        //if parent < current value, make left child
                        //a right child of parent
                        } else if(currentNode.value > 
                        parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                    //Option 2: Right child which doesn't have left child
                } else if(currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        //if parent > current, make right child of 
                        // the left the parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                        //if parent < current, make right 
                        // child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                //option 3: right child that has a left child
                } else {
                    //find the right child's left MOST child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                    leftmostParent = leftmost;
                    leftmost = leftmost.left;
                }
                //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                    if(currentNode.value < parentNode.value) {
                    parentNode.left = leftmost;
                    } else if(currentNode.value > parentNode.value) {
                    parentNode.right = leftmost;
            }
        }
    }
    return true;
        }
    }
  }
}

//       9
//   4       20
// 1   6   15  170

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left == null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root))

//copy json from console.log and paste it into dev tools
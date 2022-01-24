//Node class
class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //insert(data)
    insert(data) {
        let newNode = new Node(data);

        //node is null then node will be added 
        //to tree and made root
        if(this.root === null)
        this.root = newNode;
        else 

        //find the correct position in the tree
        //and add node
        this.insertNode(this.root, newNode);
    }

    //Method to insert node in tree
    //it moves over tree to find location
    //to insert a node w/ given data
    insertNode(node, newNode) {
        //if data<node data, move left of tree
        if(newNode.data < node.data) {
        
            //if left is null insert node here
            if(node.left === null)
                node.left = newNode;
                else 

                    //if left is not null recur until
                    //null is found 
                    this.insert(node.left, newNode);
    }

    //if data>node value, move right
    else {
        //if right is null insert node here
        if(node.right == null)
            node.right = newNode;

            else 
            //if right is null insert node here
            if(node.right === null)
            node.right = newNode;
            else 

            //if right not null recur until
            //null is found
            this.insertNode(node,right, newNode);
        }
    }

    //TWO METHODS ABOVE: insert(data), insertNode(node, newNode)
    //insert(data): creates a new node w value data
    //if tree is empty,it add this node to tree and
    //make it a root, otherwise calls insert(node, data)
    //insert(node, data): compares given data w data of current node
    //and moves left/right accordingly and recur til 
    //it finds correct node with null value where new node can be added

    //remove(data)

    //Helper method that calls removeNode with given data
    remove(data) {
        //root is re-initialized w root of modified tree
        this.root = this.removeNode(this.root, data);
    }

    //Method to remove node w a given data
    //it recur over the tree to find data and removes it
    removeNode(node, key) {
        //if root is null then tree is empty
        if(node === null) 
            return null;
        
        //if data to delete<root.data, move to left
        else if(key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        //if data is similar to roots data
        //then delete this node.
        else {
            //deleting node w no children
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            //deleting node w one children
            if(node.left === null) {
                node = node.right;
                return node;
            }
            else if(node.right === null) {
                node = node.left;
                return node;
            }

            //Deleting node w two children
            //minimum node of right subtree
            //is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    //Helper Function

    //findMinNode()
    //findMinNode(node): searches for node w min value 
    //starting from node

    findMinNode(node) {
        //if left of node is null
        //then it must be min node
        if(node.left == null) 
            return node;
            else 
                return this.findMinNode(node.left);
        }
    
    //getRootNode()
    getRootNode() {
        return this.root;
    }
    //inorder(node)
        inorder(node) {
            if(node !== null) {
                this.inorder(node.left);
                console.log(node.data);
                this.inorder(node.right);
            }
        }
    //preorder(node)
    preorder(node) {
        if(node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    //postorder(node)
    postorder(node) {
        if(node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    //search(node, data)
    // search for a node with given data
search(node, data) {
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.search(node.left, data);
 
    // if data is less than node's data
    // move left
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
    }
}

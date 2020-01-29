// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

var isValidBST = function(root) {
    const arr = [];
    convertToArray(root, arr);
    const length = arr.length;
    for(let i = 1; i < length; i++) {
        if(arr[i-1] >= arr[i]) return false;
    }
    return true;
    
};
const convertToArray = function(root, arr) {
    //inorder traversal
    if(root == null) return;
    convertToArray(root.left, arr);
    arr.push(root.val);
    convertToArray(root.right, arr);
}
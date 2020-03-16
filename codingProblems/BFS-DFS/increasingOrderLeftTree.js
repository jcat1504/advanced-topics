// Given a binary search tree, rearrange the tree in in-order so that the 
// leftmost node in the tree is now the root of the tree, and every node has no 
// left child and only 1 right child.

var increasingBST = function(root) {
  if (!root) {
    return root;
  }
  
  const leftRoot = increasingBST(root.left);
  root.left = null;
  root.right = increasingBST(root.right);
  
  if (!leftRoot) {
    return root;
  }
  
  let lastLeftNode = leftRoot;
  while (lastLeftNode.right) {
    lastLeftNode = lastLeftNode.right;
  }
  
  lastLeftNode.right = root;
  return leftRoot;
};
// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes
// along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

var maxDepth = function(root) {
  const traverse = (current, depth = 0) => {
    if (current === null) return depth;
    depth++;
    return Math.max(traverse(current.left, depth), traverse(current.right, depth));;
  };
  
  return traverse(root);
};
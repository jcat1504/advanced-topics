// Given a binary tree and a sum, determine if the tree 
// has a root-to-leaf path such that adding up all the values 
// along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf 
// path 5->4->11->2 which sum is 22

var hasPathSum = function(root, sum) {
    if (root === null) return false;
        if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};

//other solution
var hasPathSum = function (root, sum) {
/* helper function which returns true if sum == root.val .else recurse.*/
  function helper(root, sum) {
    if (!root) {
      return false;
    }
    if (!root.left && !root.right) {
      if (sum === root.val) {
        return true;
      } else {
        return false;
      }
    }

    return (
      helper(root.left, sum - root.val) || helper(root.right, sum - root.val)
    );
  }
  return helper(root, sum);
  
};
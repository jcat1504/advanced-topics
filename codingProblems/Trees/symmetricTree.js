// Given a binary tree, check whether it is a 
// mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

var isSymmetric = function(root) {
    return helper(root, root)
};

const helper = function(p, q) {
    if (p == null && q == null)
        return true
    if (p == null || q == null)
        return false
    return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left)
}
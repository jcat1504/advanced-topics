// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins


var isCousins = function(root, x, y) {
    function getDepthAndParent(node, n, depth=0, parent){
        if(!node) return null;
        if(node.val === n) {
            return {depth, parent};
        }
        let left = getDepthAndParent(node.left, n, depth+1, node);
        let right = getDepthAndParent(node.right, n, depth+1, node);
        return left || right;
    }
    let {depth: xDepth , parent: xParent } = getDepthAndParent(root,x);
    let {depth: yDepth , parent: yParent } = getDepthAndParent(root,y);
    
    return xDepth === yDepth && xParent !== yParent;
};
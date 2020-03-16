// Given a singly linked list where elements are sorted in ascending 
// order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a 
// binary tree in which the depth of the two subtrees of every node 
// never differ by more than 1.

var sortedListToBST = function(head) {
    const numOfNodes = countNodes(head)
    return traverse(numOfNodes)

    function traverse(n) {
        if (n <= 0) return null 

        const left = traverse(Math.floor(n / 2))
        const root = new traverseInOrder(head.val)
        root.left = left 
        head = head.next//confirming root of left sub tree 
        root.right = traverse(n - Math.floor(n / 2) - 1)

        return root 
    }

    function countNodes(node) {
        if (!node) return 0 
        return 1 + countNodes(node.next)
    }
}
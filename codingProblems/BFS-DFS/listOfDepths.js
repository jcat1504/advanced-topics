//GIVEN A BINARY TREE, DESIGN AN ALGO WHICH CREATES A LINKED LIST OF ALL NODES AT EACH DEPTH

class LinkedList() {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        if(this.head === null) {
            this.head = new LinkedListNode(value);
            this.tail = this.tail.next;
        }
    }
class BinaryTreeNode(value) {
    constructor() {
        this.value = value;
        this.left = null;
        this.right = null;
    }
     whoAmI() {
        return `Node {this.value} `;
        }
    }
class BinaryTree(){
    constructor(value) {
        this.root = value || null;
        }
    }
    const createList = (root) => {
        let lists = [];
        if (!root) return lists;
        addToList(lists, root, 0);
        return lists;
    }
    function addToList(list, node, depth) {
        if (node) {
            if (!list[depth]) {
                lists[depth] = new LinkedList();
            }
            lists[depth].append(node.val)
            addToList(lists, node.left, depth + 1)
            addToList(lists, node.right, depth + 1)
        }
    }
}
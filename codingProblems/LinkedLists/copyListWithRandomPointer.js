// A linked list is given such that each node contains an 
// additional random pointer which could point to any node in 
// the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a 
// list of n nodes. Each node is represented as a pair 
// of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) 
// where random pointer points to, or null if it does not point 
// to any node.

var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
        clones.set(n, new Node(n.val));
        n = n.next
    }
    n = head;
    while(n) {
        clones.get(n).next = clones.get(n.next) || null;
        clones.get(n).random = clones.get(n.random) || null;
        n = n.next;
    }
    return clones.get(head);
}

//solution 2
var copyRandomList = function(head) {
    if (head === null)return null;
    let currentNode = head;
    let map = new Map();

    while(currentNode != null){
        map.set(currentNode, 
        new Node(currentNode.val, currentNode.next, currentNode.random))
        currentNode = currentNode.next;
    }

    let newHead = map.get(head);

    for (let newNode of map.values()) {
        if(newNode.next != null) newNode.next = map.get(newNode.next);
        if(newNode.random != null) newNode.random = map.get(newNode.random);
    }
    return newHead;
}

if (head == null) {
        return null;
    }
    let temp = head;
    // first set the next pointers
    while (temp !== null) {
        let newNode = new Node(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = newNode.next;
    }
    // set the random pointers now
    temp = head;
    while (temp !== null) {
        temp.next.random = temp.random ? temp.random.next : null;
        temp = temp.next.next;
    }
    // unweave the list now
    let oldList = head;
    let newList = head.next;
    let dummy = newList;
    while (oldList !== null) {
        oldList.next = oldList.next.next;
        newList.next = newList.next ? newList.next.next : null;
        oldList = oldList.next;
        newList = newList.next;
    }
    return dummy;
};
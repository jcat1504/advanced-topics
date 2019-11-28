//10--->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        //instantiate -- create and run this new node
        this.tail.next = newNode; //which is the new node
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        //making a new pointer
        this.head = newNode;
        this.length++;
        return this
    }
    printList() {
        const array = [];
        //while currentNode is not at the end of LinkedList, add the value
        let currentNode = this.head;
    while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
        //keep traversing
    }
    return array;
    }
    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }
    remove(index){
        const leader = this.traverseToIndex(index-1); //points to leader
        const unwantedNode = leader.next;
        leader.next = unwantedNode;
        this.length--;
        return this.printList();

    }
    traverseToIndex(index) {
        //pointing to leader, which is previous head
        let counter = 0;
        let currentNode = this.head;
        while (counter != index ) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
};

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
//insert() - when we want to insert a new node between two nodes,
//we gotta figure out first node(we can call leader), second node,
//and insert inbetween em
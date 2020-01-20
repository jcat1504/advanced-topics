//10--->5-->16

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev =  null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        //instantiate -- create and run this new node
        newNode.prev = this.tail;
        this.tail.next = newNode; //which is the new node
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        //making a new pointer
        this.head = newNode;
        this.length++;
        return this;
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
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode
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
    reverse() {
        if (!this.head.next){
        //if there is only a head node 
        return this.head;
        }
        let first = this.head; //reference
        this.tail = this.head;
        let second = first.next; //second node
        while(second) {
            const temp = second.next; //ref to third temporary
            second.next = first;
            first = second;
            second = temp;
            }
            this.head.next = null;
            this.head = first;//88 to be head next to be null
            return this.printList()
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

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
//insert() - when we want to insert a new node between two nodes,
//we gotta figure out first node(we can call leader), second node,
//and insert inbetween em
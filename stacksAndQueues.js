//Stacks
//Can be built with arrays and Linked Lists. why both?
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
} //use node class assign different values
//make sure .net points to a different node

class Stack  {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if (this.length === 0 ) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom){
        //only one item on list
            this.bottom = null;
        }
        // const holdingPointer = this.top;
        this.top = this.top.next; //pointing to next node once removed
        this.length--; //decrease length by one
        return this;
    }
}

//arrays...
class Stack  {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
        }
    }





const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();

//Queues 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
} //use node class assign different values
//make sure .net points to a different node

class Queue  {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0 ) {//nothin in queue
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
            //what ever is last in line is pointing to new node
            //new node is now last
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        // const holdingPointer = this.first --if we want to still have access to Joy node later on
        this.first = this.first.next;
        //who ever is first, points pointer to next 
        // person in line(next node)
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue('Joy');

//Arrays O(n)
class Stack  {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
        }
    }





const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();
//LinkedLists <-- Better! O(1) constant time


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
        const holdingPointer = this.top;
        this.top = this.top.next; //pointing to next node once removed
        this.length--; //decrease length by one
        return holdingPointer;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
//Queues 
//Arrays O(n)
//LinkedLists <-- Better! O(1) constant time


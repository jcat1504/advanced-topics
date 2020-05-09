//Implement myQueue class which implements a queue using two stacks

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue() {
        for (let i=0; i<this.stack2.length; i++) {
            this.stack1.push(this.last.pop())
        }
        this.stack1.push(value)
    }

    dequeue() {
        while(this.stack1.length > 0) {
            this.stack2.push(stack1.pop);
        }
        return this.stack2.pop();
    }
}

//loop thru elements of our first stack, pop from first array then push to second array
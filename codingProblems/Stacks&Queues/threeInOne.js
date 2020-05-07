//describe how you could use a single array to implement 3 stacks
//analysis: allocate 1/3 of array to first stack, 2/3 then 3/3. shift stacks around

class FixedMultiStack {
    constructor(){
        this.numberOfStacks = 3;
        this.stackCapacity = stackCapacity;
        this.values = values;
        this.sizes = sizes;
    }

    FixedMultiStack(stackSize) {
        this.stackCapacity = stackSize;
        values = [stackSize * numberOfStacks];
        sizes = [this.numberOfStacks]
    }

    push(stackNum, value) {
        if(isFull(stackNum)) {
            return 'Stack is Full'
        }
    //increment stack pointer and update top value
    sizes[stackNum]++;
    values[indexOfTop(stackNum)] = value;
    }

    //pop item from top stack
    pop(stackNum) {
        if(isEmpty(stackNum)){
            return 'stack is empty'
        }
        var topIndex = indexOfTop(stackNum);
        var value = values[topIndex];
        values[topIndex] = 0; //clear
        sizes[stackNum]--; //shrink
        return value;

    }

//return top element
peek(stackNum) {
    if(isEmpty(stackNum)){
        return 'error, is empty'
    }
    return values[indexOfTop(stackNum)]
}

//return if stack is empty
isEmpty(stackNum) {
    return sizes[stackNum] === 0;
}

//is full
isFull(stackNum){
    return sizes[stackNum] === this.stackCapacity
}

//returns index to top of the stack
indexOfTop(stackNum) {
    var offSet = stackNum * this.stackCapacity;
    var size = sizes[stackNum]
    return offSet + size - 1;
}

}
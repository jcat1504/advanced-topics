//how would you design a stack, called min, which returns the minimum element?
//have a single int value--when minValue is popped, we search thru stack to find new minimum
var minStack = function() {
    this.minStack = [];
    this.container = [];
}

minStack.prototype.push = function(x) {
    this.container.push(x);
    if(this.minStack.length === 0 x <= this.minStack.length-1)] {
        this.minStack.push(x)
    }
}

minStack.prototype.pop = function() {
    return this.container[this.container.length - 1]
}

minStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
}
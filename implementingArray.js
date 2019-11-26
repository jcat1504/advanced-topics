class MyArray { 
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
        //returns data
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        //next time we use push method, the length will be 1, then we will
        //add at index of 1, so on and so forth
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        //which item you wanna pop off
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++)
        {
            this.data[i] = thisdata[i+1];
            //shifting items to the left by 1

            delete this.data[this.length-1]
            //delete last item and decrement our length by 1
            this.length--;
        }
    }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('you');
console.log(newArray);
//we are creating a new array from scratch with the power of instantiation

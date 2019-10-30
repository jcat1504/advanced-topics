class hashTable {
    constructor(size) {
        this.data = new Array(size)
    }

_hash(key) {
    let hash = 0;
    for (let i=0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) %
        this.data.length
    }
    return hash;
}

set(key, value) {
    let address = this._hash(key);
    //use hash function to grab address
    if (!this.data[address]) {
        //if current address of data is empty, create empty array
        this.data[address] = [];
        this.data[address].push([key,value])
        //push key and value in empty array which is address
    }
    this.data[address].push([key,value])
    //else, add in that space anyway(no replacing)
}

//GET KEY OBJECT
get(key) {
        let address = this._hash(key);
        //use hash function to grab address
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                    //looping through current address
                    //if current address(or rather, first of array) = key 
                    //return the second of array[1] since you want to return value
                    //in key,value                    
                    //Key-->grapes, 10000<---Value
                    //myHashTable.get(key);
                }
            }
        }
        return undefined;
}

keys() {
    const keysArray = [];
    for (let i=0; i < this.data.length; i++) {
        if(this.data[i]) {
            keysArray.push(this.data[i][0][0])
            //looking into very first index of first array
            //when we created a hashtable, we created an empty array
            //when we create a set, we create another empty array...
            //so it looks like this [[ , ]]
        }
    }
    return keysArray
}
}

const myHashTable = new hashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 100);
myHashTable.get('grapes');
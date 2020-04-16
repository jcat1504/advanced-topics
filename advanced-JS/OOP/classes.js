//REFERENCE TYPES
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10};

//context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}

//Instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, I am a ${this.type} !`)
    }
}
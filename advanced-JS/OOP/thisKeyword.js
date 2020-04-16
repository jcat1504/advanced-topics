//new binding of this keyword
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Jess', 27);
person1;

//implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi(){
        console.log('hi ' + this.name)
    }
}

//explicit binding 
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        console.log('hi ' + this.setTimeout)
    }.bind(window)
}
//^^we are explicitly binding the this.setTimeout action to the window^^

//arrow functions
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner()
    }
}
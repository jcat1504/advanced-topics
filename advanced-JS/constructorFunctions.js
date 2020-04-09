function createElf(name, weapon) {
    return {
        name, 
        weapon, 
        attack(){
            return 'attack with ' + weapon
        }
    }
}

const peter = new Elf('Peter', 'stones')
peter.attack();

//CONSTRUCTOR FUNCTIONS
class Elf {
    constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}
//SO...why can't we just put the attack function into the constructor? well, attack is shared by all instances of the class and putting it up in constructor will take up more
//memory space. name and weapon are all unique values for each instances, whereas attack must be shared by others

// Elf.prototype.attack = function() {
//     return 'attack with ' + this.weapon
// }

const sam = new Elf('Sam', "fire")
console.log(sam.attack())
//instance: a reference to an object so in other words Peter is an instanceOf Elf
//^^ this is called INSTANTIATION but underneath the hood we are implementing prototypal inheritance still since JS does not really have classes--its all syntactical sugar
//

class Character{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        //calls the constructor of super class(Character) and then it works with this keyword
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return ' strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack();
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.makeFort();

console.log(Ogre.prototype.isPrototypeOf(shrek)); //true
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));

//remember that we create an instance from a class using the word 'new'. we are essentially creating a version of the class
//inheritance is using 'extends' is inheriting somethin from a higher class. it links up the prototype chain so youre not creating copies or inefficiency.
//^^ so for example, we are not creating any copies but we are moving up the chain to the Character class when we are referring about Ogre. 
//Ogre is 'inheriting' methods from Character

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}
 
  class Queen extends Character {
   constructor(name, weapon, type) {
     super(name, weapon)
     this.type = type;
  }
  attack(type) {
    return `${super.attack()} 
    I am the ${this.name} of ${this.type.has(type) ? type : 'hearts' }, now bow down to me! `       
  }
}
 
const victoria = new Queen('Victoria', 'army', new Set().add('hearts').add('clubs').add('spades').add('diamonds')); 
 
console.log(victoria.attack('clubs'));
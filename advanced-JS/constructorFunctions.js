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
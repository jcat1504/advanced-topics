let animals = new Set();

animals.add('pig');
animals.add('panda');
animals.add('turtle');
animals.add('frog');

console.log(animals.size); //4
animals.add('panda'); //stays the same since sets only carry unique elements

console.log(animals.has('pig')); //true
animals.delete('pig');
console.log(animals.has('pig')) //false

animals.forEach(animal => {
    console.log(`Hey ${animal}! `)
})

animals.clear();
console.log(animals.size); //0

//another example when we pass in an array to initialize the set. 
//notice how initializing the array gets deconstructed but an array added
//later stays in the form of the array

let myAnimals = new Set(['pig', 'turtle', 'pig', 'pig']);
myAnimals.add(['bear', 'sheep']);
myAnimals.add({name: 'Rud', type: 'turtle'});
console.log(myAnimals.size); //4

myAnimals.forEach(animal => {
    console.log(animal)
})
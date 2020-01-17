//create an array 
var rightPocket = [];

//add by index
rightPocket[0] = 'fantasia';

rightPocket[1] = 'savage materia';

//figure out length
rightPocket.length;

//Works as a stack LIFO(Last In First Out)
rightPocket.push('chewing gum');
console.log('You get the ' + rightPocket.pop())
//=> You get the chewing gum

//can also work as a queue(FIFO)
leftPocket.push('cheese sandwich')
console.log(
  'You pay the cheese sandwich with ' +
    leftPocket.shift() +
    '. That was a pricy sandwich...'
)
// => You pay the cheese sandwich with 10 gold coins.
//    That was a pricy sandwich...

//unshift: inserts items in the beginning of array 
leftPocket.unshift('red materia');
console.log('You aexamine the ' + leftPocket[0] + ' in wonder');
// => you examine the red materia in wonder


leatherBag = [];
leatherBag.push('dried meat', 'white feather');
leatherBag.unshift('red materia', 'savage materia');
//=> ['red materia', 'savage materia', 'dried meat', 'white feather']

//another remove method: splice
var firstItem = leatherBag.splice(/* start */ 0, /* numberOfItemsToRemove */ 1)
console.log('extracted first item => ' + firstItem)
// => extracted first item => red materia 

// you can use negative indexes to start from the end of the array
var lastItem = leatherBag.splice(-1, 1)
console.log('extracted last item => ' + lastItem)
// => extracted last item => white feather

var someRandomItemsInTheMiddle = leatherBag.splice(1, 2)
console.log('extracted items in the middle => ' + someRandomItemsInTheMiddle)
// => extracted items in the middle => dried meat

//splice can even insert items
rightPocket.splice(1, 0 'fish', 'jerky');
//^^splice(startIndex, numberOfItemsToRemove, item1, item2, etc...)
// => fantasia, fish, jerky, savage materia

//...or remove items and insert items at once 
let candle = rightPocket.splice(1, 1, 'secret message', 'wax')
//> ['fantasia', 'secret message', 'wax', 'fish', 'jerky', 'savage materia']




//SORTING ARRAYS
function Potion(name, quantity) {
  return {
    name,
    quantity,
    toString() {
      return `(${this.quantity}) ${this.name}`
      //(quantity) potion name
    },
  }
}

var potionsCase = [
  Potion('potion of firebreathing', 2),
  Potion('potion of vigor', 1),
  Potion('potion of major healing', 3),
  Potion('potion of cure poison', 1)
]
// the compare function f(a,b) should return:
// < 0 if a < b
// 0 if a === b
// > 0 if a > b
potionsCase.sort((p1, p2) => p1.quantity - p2.quantity)
//is this bubble sort?? 
console.log('You examine your potion case closely... ' + potionsCase)
// => You examine your potion case closely...
//     (1) potion of cure poison,
//     (1) potion of vigor,
//     (2) potion of firebreathing
//     (3) potion of major healing,


potionsCase.reverse()
//    (3) potion of major healing,
//    (2) potion of firebreathing,
//    (1) potion of cure poison,
//    (1) potion of vigor



//SAFE ARRAY METHODS - will not mutate array 

var superPocketBag = rightPocket.concat(leatherBag);
//rightPocket + leatherBag stuff together 

function beautifyPocket(pocket) {
  return pocket.join('\n========\n')
}
console.log(`You examine your inventory: \n ${beautifyPocket(rightPocket)}`)
//You examine your inventory: 

//fantasia
///========
//saage materia 

//indexOf: returns the position of an item within an array:
var indexOfFantasia = rightPocket.indexOf('fantasia')
console.log('The fantasia is at position: ' + indexOfFantasia);

//indexOf returns -1 when it can't find an item
if (rightPocket.indexOf('red stone') === -1) {
  console.log("You don't have a precious red stone in your inventory")
}

//indexOf returns the first occurence of an item in an array
//You can use lastIndexOf to find the last occurance of an item

//slice non-destructive alternative to splice. Expects start and end of subarray to extract
console.log('leather bag has ' + leatherBag.length + ' items: ' + leatherBag)
//leather bag has 4 items: red materia, savage materia, dried meat, white feather

//let's reproduce the dried meat
console.log(leatherBag.slice(/* start */ 1, /* end */ 3))
//=> savage materia, dried meat
//extracts up to the end but does not include it 

//can also count negative starting from end of array
var lastItem = leatherBag.slice(-1)
console.log(lastItem);
//white feather 

//ITERATE THRU AN ARRAY 
leatherBag.forEach(function(item){
  console.log('You examine ' + item)
})

//for each can give you access to each index and array itself 
console.log('You examine your inventory.... veeery closely: ')
leatherBag.forEach(function(item, index, array) {
  console.log(
    'You examine ' +
      item +
      ' closely (' +
      (index + 1) +
      '/' +
      array.length +
      ')'
  )
})
//=> You examine your inventory...veeery closely: 
//    You examine skeleton skull closely (1/2)
//    You examine dried meat closely (2/2)

//Array.from method let's you create an array from an array-like and iterable object
// (in this case it'd better to use the rest syntax ...items)
function sortItems() {
  var items = Array.from(arguments)
  return items.sort()
}
console.log(sortItems('mandragora', 'amber', "elf's tongue"))
// => ["amber", "elf's tongue", "mandragora"]

//Any object that can be iterated over can be converted into an array using Array.from. Like...a map
var library = new Map()
library.set('horror', ['It', 'The thing', 'horrors of Swarland'])
library.set('love', ['Romance and Betrayal', 'Beauty I'])
library.set('history', ['The fall of the Kraagg Empire'])

console.log(
  'Welcome to the library of Anriva!' + ' These are our most valuable books'
)
Array.from(library).forEach(keyValuePair => {
  console.log(keyValuePair)
})
// => ["horror", ["It", "The thing", "horrors of Swarland"]]
//    ["love", ["Romance and Betrayal", "Beauty I"]]
//    ["history", ["The fall of the Kraagg Empire"]]

//array.from also takes a second optional argument, a map function that lets you transform each element within the source array into something else of your own choosing:
function sortItemsProperty(selector, ...args) {
  var items = Array.from(args, selector)
  return items.sort()
}

console.log(
  sortItemsProperty(
    i => i.price,
    { name: 'mandragora', price: 2 },
    { name: 'amber', price: 10 }
  )
)
// => [10, 2]


//The Array.of method lets you create an array from a variable number of arguments and is equivalent to []:
let ingredients = Array.of('bat wings', 'unicorn horn', 'sesame seeds')
// => ['bat wings', 'unicorn horn', 'sesame seeds']

//Why would you want to use Array.of instead of [] then? There is a corner case application where Array.of is essential, when creating Array subclasses:
class ItemsArray extends Array {
  price() {
    return this.map(i => i.price).reduce((a, p) => a + p, 0)
    //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    //the 0 at the end means add 0 value
    //ie. if >0, like 1, just add +1 to value after addition
  }
}
// how can you instantiate an array of ItemsArray in a consistent way
let itemsArray = ItemsArray.of(
  { name: 'bat wings', price: 10 },
  { name: 'unicorn horn', price: 10000 },
  { name: 'sesame seeds', price: 1 }
)
console.log(`the price of all your wares is ${itemsArray.price()} golden coins`)
// => the price of all your wares is 10011 golden coins

//returns a reference to the elements by its ID
document.getElementById('someid');

//returns an array-like object of all child elements which have
//all given class names
document.getElementsByClassName('classname');

//returns an HTMLCollection of elements with given tag name 
documwnr.getElementsByTagName('li');

//returns the first element within the document that matches specified
//group of selectors ... query is CSS based.
document.querySelector('.someClass');

// Returns a list of the elements within the document 
// (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');

//get child nodes
let stored = document.getElementById('someId');
let children = stored.childNodes;

//get parent node
let parental = children.parentNode;

//CREATE NEW DOM ELEMENTS
// create new elements 
let newHeading = document.createElement('h1');
let newParagraph = document.createElement('p');

//create text nodes for new elements 
let h1Text = document.createTextNode('this is a nice header text!');
let pText = document.createTextNode('this is a nice paragraph!');

//attach new text nodes to elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

//add above elements to DOM 
//grab element on page you want to add stuff to 
let firstHeading = document.getElementById('firstHeading');

//add both new elements to the page as children to the element 
//in firstHeader
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

//get parent node of firstHeading 
let parent = firstHeading.parentNode;

//insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);

// ADD/REMOVE/TOGGLE/CHECK CLASSES
//grab element you want to use 
let firstHeading = document.getElementById('firstHeading');

//will remove boba if it is class of firstHeading
firstHeading.classList.remove('boba')

//will add the class 'anotherClass' if one does not already exist
firstHeading.classList.add('anotherClass');

//add or remove multiple classes
firstHeading.classList.add('boba', 'tea');
firstHeading.classList.remove('boba', 'tea');

//if visible class is set, remove it, otherwise add it 
firstHeading.classList.toggle('visible');

//will return true if it has class of 'boba' false if not
firstHeading.classList.contains('boba');
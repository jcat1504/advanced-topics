    const parent = document.getElementById('parent').lastElementChild
    console.log(parent) //<p>i am the last child</p>
    
    const parent2 = document.getElementById('parent').children[3]
    console.log(parent2) //<h1>hello world</h1>
    
    const secondchild = document.getElementById('secondchild')
    console.log(secondchild) //<p id="secondchild">i am the second child</p>
    
    console.log(secondchild.parentNode) //<div id="parent">...</div>

    console.log(secondchild.nextElementSibling) //<h4>i am alive</h4>

    console.log(secondchild.previousElementSibling) //<div id="firstchild">i am a first child</div>



// HOW TO CREATE ELEMENTS 
    
const createEl = document.createElement('div')
console.log(createEl) //<div>​i am a frontend developer​</div>
 

// HOW TO APPEND AN ELEMENT ​
const createEl = document.createElement('div')

const innerhtml = createEl.innerHTML = 'i am a frontend developer'

const parentEl = document.getElementById('parent')

parentEl.appendChild(createEl)

console.log(parentEl) 

// REPLACE CHILD ELEMENT 
const firstchildEl = document.getElementById('firstchild')
const parentEl = document.getElementById('parent')

const createEl = document.createElement('div')
const innerhtml = createEl.innerHTML = 'i am a frontend developer'

parentEl.replaceChild(createEl, firstchildEl)

console.log(parentEl)

//HOW TO REMOVE CHILD ELEMENT 
const firstchildEl = document.getElementById('firstchild')
 const parentEl = document.getElementById('parent')
 
 parentEl.removeChild(firstchildEl)

 console.log(parentEl)
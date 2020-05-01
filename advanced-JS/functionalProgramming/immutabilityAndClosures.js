//immutability: not changing data or state
const obj = { name: 'Andre'}

function clone(obj) {
    return { ...obj }//this is pure
}

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Jess';
    return obj2
}

const updatedObj = updatename(obj)
console.log(obj, updatedObj);

//HOF -- Higher Order Functions
const hof = (fn) => fn(5)
hof(function a(x) { return x})

//closure 
const closure = function() {
    let count = 5;//this is a private variable
    return function getCounter() {
        return count;
    }
}

const getCounter = closure();
getCounter();
getCounter();
//Given two arrays, create a function that lets a user know(true/false) whether two arrays contain any common item

const array1=['a', 'b', 'c', 'x'];
const array2=['z', 'y', 'x'];

//we can create a nested for loop...however that would not be as cost efficient
const findCommonItem = (array1, array2) => {
    for(let i = 0; i<array1.length; i++) {
        for (let j = 0; j<array2.length; j++) {
            if(array1[i]===array2[j]) {
                return true
            }
        }
    }
    return false;
}

findCommonItem(array1, array2);

//SECOND SOLUTION
//For more time efficiency, we can NOT create nested loops but maybe go for hash tables
//we create two loops that are seperate

//a bit of pseudocode
array1 ==> obj {
    a:true,
    b: true,
    c: true,
    x:true
}
array2[index] === obj.properties
//so we make second array loop over each array1 properties for matching
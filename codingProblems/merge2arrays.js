//mergeSortedArrays([0,3,4,31], [4,6,30]);

//create two arrays
//figure out way to combine or add two arrays together. array1+array2
//figure out way to sort numerical values
//create third array combining both together:
//const mergedArray = array1+array2
//return new array. 

CREATE ARRAY1 EQUALS NUMERICAL VALUES1
CREATE ARRAY2 EQUALS NUMERICAL VALUES2
CREATE ARRAY3 WHICH EQUALS TO (ARRAY1 PLUS ARRAY2)
ARRAY3 SORT NUMERICAL VALUE IN ASCENDING ORDER?
RETURN ARRAY3

var array1 = [0, 3, 4, 31];
var array2 = [4, 6, 30];

function mergedArray(array1, array2){
    let result = array1.concat(array2);
    return result.sort((a,b) => a-b);
}

mergedArray(array1, array2);
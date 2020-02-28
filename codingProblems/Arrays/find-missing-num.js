//FIND MISSING NUMBERS FROM UNSORTED ARRAY
function missingNumber(arr) {
    var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
}

function findMissingNumbers(arr) {
    // Create sparse array with a 1 at each index equal to a value in the input.
    var sparse = arr.reduce((sparse, i) => (sparse[i]=1,sparse), []);
    // Create array 0..highest number, and retain only those values for which
    // the sparse array has nothing at that index (and eliminate the 0 value).
    return [...sparse.keys()].filter(i => i && !sparse[i]);
}

var someArr = [2, 5, 3, 1, 4, 7, 10, 15]
var result = findMissingNumbers(someArr);
console.log(result);
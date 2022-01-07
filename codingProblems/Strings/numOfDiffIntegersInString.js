// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice 
// that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

// To get this problem right one needs to pay attention to corner cases, mostly around leading zeros. But it is possible to 
// organize the code so it flows in 3 logical steps:

// - get all the sub-strings containing only numbers (I'm using a RegExp);
// - drop leading zeros (except for the last one if the string contains zeros only);
// - use a Set to avoid duplicated numbers.

// Please note that numeric strings are not converted to an number (intger or otherwise) - this way we can handle very
//  long strings / large numbers.

// Here is the code with detailed comments:

const CC0 = '0'.charCodeAt(0);

var numDifferentIntegers = function(word) {
    const numStrSet = new Set();
    
    // get numbers as strings
    const numStrs = word.split(/[^0-9]+/);
    
    // drop leading zeros
    for (const numStr of numStrs) {
        if (numStr.length > 0) {
            let i = 0;
            while (numStr.charCodeAt(i) === CC0) i++;
            
            // make sure that we preserve last 0 if string is composed of zeros only
            numStrSet.add(numStr.slice(i) || '0');
        }
    }
    
    return numStrSet.size;
};
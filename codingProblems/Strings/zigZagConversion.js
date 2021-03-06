//The string "PAYPALISHIRING" is written in a zigzag pattern on a 
//given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

//Write the code that will take a string and make this conversion given a number of rows

var convert = function(s, numRows) {
    if(numRows == 1 || s.length < numRows ) return s;
    let rows = [];
    let count = 0;
    let reverse = false;

    for (let i = 0; i < numRows; i++) rows[i] = []
        for (let i = 0; i<s.length; i++) {
            rows[count].push[s[i]]
            reverse ? count-- : count++;
        }
    return rows.join(' ')
};
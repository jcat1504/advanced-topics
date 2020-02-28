//array.map

let result = rotLeft();

function rotLeft() {
  let result = data.map(function(value, index) {
    let pos = parseInt(index) + parseInt(d - 1);
    if (pos > n-1) {
      pos = pos - n;
    }
    return data[pos];
  })
  
  return result;
}

//The rotLeft() function uses the array.map() function to iterate over each element in the array.
//Upon each iteration I calculate the position of the element within data given the index and store this in pos.
//I return the value in the source data.

//array.shift()

let result = rotLeft();

function rotLeft = () => {
  let temp = data.splice(0);
  for (let i=0; i<d-1; i++) {
    //n = d. giving number of rotations given by n.
    let first = temp.shift();
    temp.push(first);
  }
  return temp;
}

//The rotLeft() function makes a copy of the source data and stores it in a variable named temp.
//I then iterate the number of rotations given by n.
//Within each iteration I invoke array.shift() and store the first element in the variable first. I then push() the first element onto the end of the array.


//HACKERRANK SOLUTION--since HR doesn't really accept um...data prototypes/class prototypes and all that...
function rotLeft(a, d) {
    const index = d % a.length;
    return [...a.slice(index), ...a.slice(0, index)];
}

//index returns remainder of length of a. cause modulus
//slice returns shallow copy of a portion of an array
//it grabs index of remaining numbers and replaces it

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array){
    const length = array.length;
    for (let i = 0; i < length; i++){
        if (array[i] < array[0]){
            //^^loop; if item we are looking for is less than 1st item
            //move num to first position
            array.unshift(array.splice(i,1) [0]);
        } else {
            //find where num should go 
            for (let j = 1; j < i; j++){
                if (array[i] > array[j-1] && array[i] < array[j])
                //if item we are lookin for is greater than previous element 
                //of array
                //but also less than value of current element
                {
                    //move num to right spot 
                    array.splice(j,0,array.splice(i,1) [0]);
                }
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);
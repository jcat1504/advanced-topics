const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0 ; i < length; i++){
        for (let j = 0; j<length; j++){
             if(array[j] > array[j+1]){
                 //if array j which is first value is greater than 
                 //j+1(second val)...
                 //swap numbers 
                 let temp = array[j];
                 array[j] = array[j+1]; //99 would now go to second index
                 array[j+1] = temp;//basically swapping nums
             }
        }
    }
}
bubbleSort(numbers);
console.log(numbers);
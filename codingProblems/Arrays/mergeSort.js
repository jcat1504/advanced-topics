const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1){
        return array;
    }
    //Split array into right and left
    const length = array.length;
    const middle = Math.floor(length, 2)
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    //console.log('left:', left);
    //console.log('right:', right);

    return mergeSort(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && 
    rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftindex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
            //if left item is less than item on right, push in array
            //other wise, add in right 
        }
    }
    return result.concat(left.slice(leftIndex)).concat
    (right.slice(rightIndex));
}
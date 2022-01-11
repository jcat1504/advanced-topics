//partition
function partition(arr, start, end) {
    //Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            //swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            //moving to next element 
            pivotIndex++;
        }
    }

    //Putting the pivot value in the middle 
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
}

//recursive steps 
function quickSortRecursive(arr, start, end) {
    //Base case or terminating case 
    if (start >= end) {
        return;
    }

    //returns pivotIndex
    let index = partition(arr, start, end);

    //Recursively apply the same logic to the 
    //left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}
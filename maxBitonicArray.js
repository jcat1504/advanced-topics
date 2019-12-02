// Problem Statement: Find the maximum value in a given 
// Bitonic array. An array is considered bitonic if it is 
// monotonically increasing and then monotonically decreasing. 
// Monotonically increasing or decreasing means that for any 
// index i in the array, arr[i] != arr[i+1].

// ANAYLYSIS:
// bitonic array is a sorted array
// first part: sorted in ascending order 
// second part: sorted in descending order 
// we can do binary search 
// binary search: have a start, end and middle indices 
//     each step, we reduce search space by moving start or end 
// since no two consecutive numbers are the same(since the array 
// is monotonically increasing/decreasing ), whenever we calculate 
// the middle index for binary search, we compare the numbers pointed 
// out by the index  middle and middle+1 to find if we are ascending 
// or  decending the part.
//example: input: [1, 3, 9, 12, 4, 2], output: 12--thats when it starts descending

// 1. If arr[middle] > arr[middle + 1], we are in the second 
// (descending) part of the bitonic array. Therefore, our required 
// number could either be pointed out by middle or will be before 
// middle. This means we will do end = middle.
// 2. If arr[middle] <= arr[middle + 1], we are in the first 
// (ascending) part of the bitonic array. Therefore, the required 
// number will be after middle. This means we do start = middle + 1.

// We can break when start == end. Due to the above two points, both 
// start and end will point at the maximum number of the Bitonic array.

var MaxInBitonicArray = (function () {
    function MaxInBitonicArray() {
    }
    MaxInBitonicArray.findMax = function (arr) {
        var start = 0;
        var end = arr.length - 1;
        while ((start < end)) {
            {
                var mid = start + ((end - start) / 2 | 0);
                if (arr[mid] > arr[mid + 1]) {
                    end = mid;
                }
                else {
                    start = mid + 1;
                }
            }
        }
        ;
        return arr[start];
    };
    MaxInBitonicArray.main = function (args) {
        console.info(MaxInBitonicArray.findMax([1, 3, 8, 12, 4, 2]));
        console.info(MaxInBitonicArray.findMax([3, 8, 3, 1]));
        console.info(MaxInBitonicArray.findMax([1, 3, 8, 12]));
        console.info(MaxInBitonicArray.findMax([10, 9, 8]));
    };
    return MaxInBitonicArray;
}());
MaxInBitonicArray["__class"] = "MaxInBitonicArray";
MaxInBitonicArray.main(null);
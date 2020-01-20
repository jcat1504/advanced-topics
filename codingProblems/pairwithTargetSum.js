// Since the given array is sorted, a brute-force solution could be 
// to iterate through the array, taking one number at a time and 
// searching for the second number through Binary Search. The time 
// complexity of this algorithm will be O(N*logN). Can we do better 
// than this?

// We can follow the Two Pointers approach. We will start with one 
// pointer pointing to the beginning of the array and another 
// pointing at the end. At every step, we will see if the numbers 
// pointed by the two pointers add up to the target sum. If they do, 
// we’ve found our pair. Otherwise, we’ll do one of two things:
// If the sum of the two numbers pointed by the two pointers is 
// greater than the target sum, we need a pair with a smaller sum. 
// So, to try more pairs, we can decrement the end-pointer.
// If the sum of the two numbers pointed by the two pointers is 
// smaller than the target sum, this means that we need a pair with 
// a larger sum. So, to try more pairs, we can increment the 
// start-pointer.

var PairWithTargetSum = (function () {
    function PairWithTargetSum() {
    }
    PairWithTargetSum.search = function (arr, targetSum) {
        var left = 0;
        var right = arr.length - 1;
        while ((left < right)) {
            {
                var targetDiff = targetSum - arr[left];
                if (targetDiff === arr[right])
                    return [left, right];
                if (targetDiff > arr[right])
                    left++;
                else
                    right--;
            }
        }
        ;
        return [-1, -1];
    };
    PairWithTargetSum.main = function (args) {
        var result = PairWithTargetSum.search([1, 2, 3, 4, 6], 6);
        console.info("Pair with target sum: [" + result[0] + ", " + result[1] + "]");
        result = PairWithTargetSum.search([2, 5, 9, 11], 11);
        console.info("Pair with target sum: [" + result[0] + ", " + result[1] + "]");
    };
    return PairWithTargetSum;
}());
PairWithTargetSum["__class"] = "PairWithTargetSum";
PairWithTargetSum.main(null);

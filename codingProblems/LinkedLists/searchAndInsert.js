// Given a sorted array and a target value, return the 
// index if the target is found. If not, return the index where it would be 
// if it were inserted in order.

// You may assume no duplicates in the array.

var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var index = Math.floor((end - start) / 2) + start;
    
    if (target > nums[nums.length-1]) {
        // The target is beyond the end of this array.
        index = nums.length;
    }
    else {
        // Start in middle, divide and conquer.
        while (start < end) {
            // Get value at current index.
            var value = nums[index];
            
            if (value === target) {
                // Found our target.
                result = index;
                break;
            }
            else if (target < value) {
                // Target is lower in array, move the index halfway down.
                end = index;
            }
            else {
                // Target is higher in array, move the index halfway up.
                start = index + 1;
            }
            
            // Get next mid-point.
            index = Math.floor((end - start) / 2) + start;
        }
    }
    
    return index;
};
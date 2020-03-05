// Given a sorted array nums, remove the duplicates in-place such that each element 
// appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by 
// modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first 
// two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.


var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    var k = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            nums[k++] = nums[i];
        }
    }
    return k;
};

//SOLUTION 2
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};
//Given a non-empty array of integers, every element appears twice 
//except for one. Find that single one.

//ie. input [2,2,1]
//output: 1

var singleNumber = function(nums) {
    nums.sort();
    for (var i = 0; nums.length; i += 2) {
        if (nums[i] != nums[i+1]){
            return nums[i]
        }
    }
};
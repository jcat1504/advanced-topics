//given an array nums of size n, return majority element
//nums = [3, 2, 3, 3] output: 3
var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};

//second solution
var majorityElement = function(nums) {
    // sort the array and the middle is the majority
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
}; 
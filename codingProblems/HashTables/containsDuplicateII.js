// Given an array of integers and an integer k, find out whether 
// there are two distinct indices i and j in the array such that 
// nums[i] = nums[j] and the absolute difference between i and j is 
// at most k.

var containsNearbyDuplicate = function(nums, k) {
    for(var i = 0; i<nums.length; i++) {
        //var pointer = nums[i]
        for(j= i+1; j < nums.length; j++) {
            if(nums[j] === nums[i] && k >= Math.abs(i-j)) {
                return true;
            }
        }
    }
    return false;
}
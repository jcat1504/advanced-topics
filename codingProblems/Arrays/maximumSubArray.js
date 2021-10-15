// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    for (let i=0; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)
}

//solution 2
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}

const maxSubArray = nums => {
    let max = nums[0];
    let current = Math.max(max, 0);
    
    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }
    
    return max;
};
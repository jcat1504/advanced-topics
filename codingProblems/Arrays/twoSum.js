// Given an array of integers, return indices of the two numbers 
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    for (let i = 0; i<nums.length-1; i++)
    for (let j = i+1; j < nums.length; j++)
    if (nums[i]+nums[j] === target) return [i, j];
};

//o(n^2) cause nested for loop

const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
    for(let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1];

        for(let p2 = p1; p2 < nums.length; p2++) {
            if(numberToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }
    return null;
}

console.log(findTwoSum(numsArray, targetToFind));
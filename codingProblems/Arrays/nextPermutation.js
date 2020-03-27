// Implement next permutation, which rearranges numbers into the 
// lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the 
// lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and 
// its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

var nextPermutation = function(nums) {
    let j = nums.length - 1, i = j - 1;
    while (nums[ i + 1] <= nums[i]) i--;

    if (~i) {
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    for (let k = i+1, stop = (i + nums.length) / 2; k < stop; k++) {
        swap(nums, k, nums.length - k + 1);
    }
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
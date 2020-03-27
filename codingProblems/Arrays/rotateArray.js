// Given an array, rotate the value to the right by k 
// places, where k is non-negative.

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL

const rotate = (nums, k) => {
    nums.unshift(...nums.splice(nums.length - k%nums.length));
};
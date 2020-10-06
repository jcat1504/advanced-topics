// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
for(var i = digits.length - 1; i >= 0; i--){
     digits[i]++; 
    if(digits[i] > 9){
        digits[i] = 0;
    }else{
        return digits;
    }
}
digits.unshift(1);
return digits;
};

// First, I add 1 anyway. If there is a carry-over, the new digit will also add 1. If the current digit is less than 9 then return the array.

// Last, when running over for loop, I just put fill 1 in front of the array.
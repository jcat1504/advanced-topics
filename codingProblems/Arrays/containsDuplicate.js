//Given an array of integers, find if the array contains any duplicates.

//Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  var count = [];
  for (var i=0;i<=nums.length; i++){
    if(count[nums[i]] === undefined) {
      count[a[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};
//When we loop over the initial array, we use the array element value as our count key and if it doesn’t exist, 
// we give it a value to represent it is now defined. When we hit a count key that already exists, it is because the 
// value is a duplicate and we can immediately return true.
//o(n) this is because we are iterating thru array with a forloop and performing an operation of adding value to count
var counts = {};
your_array.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

var containsDuplicate = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
        if(obj[nums[i]] > 1) return true;
    }
    
    return false;
};

// obj keeps track of the occurrences of each num in nums. As we loop through nums, we record its frequency.

// If we've already recorded the frequency of num[i] before, then the frequency will simply be incremented by one.
// If we have not recorded the frequency of nums[i] before, then undefined + 1 will be NaN. Then it becomes NaN || 1 which should evaluate to 1.

// If at any point the frequency recorded for nums[i] is greater than 1, we return true.
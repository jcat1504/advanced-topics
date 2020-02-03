//Given an array of integers, find if the array contains any duplicates.

//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

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
//When we loop over the initial array, we use the array element value as our count key and if it doesn’t exist, we give it a value to represent it is now defined. When we hit a count key that already exists, it is because the value is a duplicate and we can immediately return true.

var counts = {};
your_array.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });


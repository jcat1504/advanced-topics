// Given a pattern and a string str, find if str follows 
//the same pattern.

// Here follow means a full match, such that there is a 
///bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false


var wordPattern = function(pattern, str) {
  var arr = str.split(' ');
  var result = true;

  var buildMap = function(a, b){
    var ob = {};
    for (var i=0; i<arr.length; i++){
       if(ob[a[i]] == undefined){
         ob[a[i]] = b[i];
       } else {
         if(ob[a[i]] !== b[i]){
         return false;
       }
     }
   }
    return true;
  };

  if(pattern.length !== arr.length){
    return false;
  } else {
    result = buildMap(pattern, arr) && buildMap(arr, pattern);
  }
  return result;
};
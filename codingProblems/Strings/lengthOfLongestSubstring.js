// Given a string, find the length of the 
// longest substring without repeating characters.

function lengthOfLongestSubstring(check) {
  var letters = check.split("");
  var max = 0;
  var result = new Map();
  var start = 0;
  
  for (var i = 0; i < letters.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
    } else {
      i = result.get(letters[i]);
      result.clear();
    }
    
    if (max < result.size) {
      max = result.size;
    }
  }
  return max;
}

lengthOfLongestSubstring("dvdf");

//SOLUTION 2
const lengthOfLongestSubstring = s => {
    // keeps track of the most recent index of each letter.
    const map = {};
    // keeps track of the starting index of the current substring.
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
        left = map[v] >= left ? map[v] + 1 : left;
        // updates last recorded index of letter to the most recent index.
        map[v] = i;
        
        // indices of current substring is (idx - leftIdx, idx).
        return Math.max(max, i - left + 1);
    }, 0)
};
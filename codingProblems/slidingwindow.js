// Given a string, find the length of the longest substring without repeating characters.
// It has:
// 1.) String as input.
// 2.) Contiguous elements requirement.
// 3.) The entire string must be iterated over.
// 4.) The longest substring must be found.

var lengthOfLongestSubstring = function(s) {
    let leftWindow = 0;
    //left side of the window used to view the current substring
    let longest = 0;
    //used to keep track of the longest length of all iterated substrings
    let counts = {};

    //rightWindow points to the index which the right side of the window stretches to
    //initially points to 0 b/c window only grows in size inside of loop when matching certain conditions
    //once rightWindow reaches the end of the string, break out of the loop

    //count of a character is incremented when the character is included in the sliding window

    for (let rightWindow = 0; rightWindow < s.length; ) {
        if (!counts[s[rightWindow]]) {
        //if current character at r.w index does not exist as a key in counts, append the current char as a key with val = 0
            counts[s[rightWindow]] = 0;
        }
        //increment that key/value pair by 1
        counts[s[rightWindow]] += 1;

        if (Object.values(counts).some((element) => element > 1)) { // if any elements in counts are duplicates (n > 1)
            counts[s[leftWindow]] -= 1; // decrement the element at leftWindow by 1, since the character is no longer in the window
            leftWindow += 1; // increment leftWindow to evaluate the next substring
    }
        longest = Math.max(longest, rightWindow - leftWindow + 1);
        //one needs to check if current substrings length is greater than integer pointed at by longest
        //longest = substring length seen thus far
        //after that, the window must expand to include another character and see if current substring can grow longer
        //increment right window by 1
        rightWindow += 1;
  }
    return longest;
};

// Write a function called maxConsecutiveSubsetSum that accepts
//  *  a list of integers and an integer n. Return an integer representing
//  *  maximum sum of n consecutive elements in the array.
//  *  n will never be smaller than the length of the list
//  * 
//  * maxConsecutiveSubsetSum([7, 9, 20, 4, 9, 3, 11, 4, 3], 2);    // 29
//  * maxConsecutiveSubsetSum([4, 5, 7, 9, 20, 4, 9, 3, 11, 4, 3], 3);    // 36
//  * maxConsecutiveSubsetSum([4, 2, 1, 6, 2], 4);    // 13
//  * maxConsecutiveSubsetSum([1, 1, 1], 3);    // 3
//  * maxConsecutiveSubsetSum([], 3);    // null
//  * 
//  * */


// void main() {
  
//   int result;
  
//   print('\n\n\n\n\n');
//   result = maxConsecutiveSubsetSum([7, 9, 20, 4, 9, 3, 11, 4, 3], 2);    // 29
//   print(result == 29);
//   result = maxConsecutiveSubsetSum([7, 9, 20, 4, 9, 3, 11, 4, 3], 3);    // 36
//   print(result == 36);
//   result = maxConsecutiveSubsetSum([4, 2, 1, 6, 2], 4);    // 13
//   print(result == 13);
//   result = maxConsecutiveSubsetSum([1, 1, 1], 3);    // 3
//   print(result == 3);
//   result = maxConsecutiveSubsetSum([], 3);    // null
//   print(result == null);
// }
function maxConsecutiveSubsetSum(list, n) {
  if (list.length < n) return null;
  
  // We don't need to set this to a min value, because we are immediately
  // establishing a baseline (which may be negative)
  let maxSum = 0;
  
  // Sum the first n elements to establish our baseline.
  for (let i = 0; i < n; i++) maxSum += list[i];
  
  const p1 = 0;
  const p2 = n;
  const tempSum = maxSum;
  
   
  // n = 3
  //    [ 4,  5,  7,   9,   20,  4,   9,   3,   11,   4,   3 ]
  //      p1___________p2

  // maxSum: 16
  // tempSum: 16
  
  // Continue until the edge of our window (i.e. p2) reaches the end of the list.
  while (p2 < list.length) {
    // Calculate prospective sum using window edges so that sum includes p2 and excludes p1 values.
    // tempSum =  16  -    4     +    9
    tempSum = tempSum - list[p1] + list[p2];
    // Update condition
    if (tempSum > maxSum)
      maxSum = tempSum;
    // Slide the window along the list
    p1++;
    p2++;
  }
  
  return maxSum;
}

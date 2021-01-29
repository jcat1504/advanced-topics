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
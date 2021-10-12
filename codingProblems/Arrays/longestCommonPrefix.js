//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';

    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    };
    return prefix;
}

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value

// -First find the shortest string in the array; the length of this string is the maximum length of our prefix
//      -this is because a prefix can't be longer than the word it inhabits
// -Next we iterate from index 0 to maxPrefixLength - 1
// -We use this index to check the corresponding character of each string together and compare them
// -This is easily done using Array.every
// -If all characters at index i match, then we add it to our prefix result string
// -As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
// -return prefix at the end, which may be empty

// The thing is with js we can sort strings and when we sort an array of different strings they will be sorted alphabetically,
//  which means all we left to do is find the common part between the first and the last values in the sorted array. As simple 
//  as this:


var longestCommonPrefix = function(strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};
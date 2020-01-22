// Given two strings s and t , write a function to determine if t 
// is an anagram of s.

var isAnagram = function(s, t) {
    return (sortStr(s) === sortStr(t));
    
};

var sortStr = (str) => {
    return str.split('').sort().join('')
}
// Given two strings s and t , write a function to determine if t 
// is an anagram of s.

//Input: s = "anagram", t = "nagaram"
//Output: true

var isAnagram = function(s, t) {
    return (sortStr(s) === sortStr(t));
    
};

var sortStr = (str) => {
    return str.split('').sort().join('')
}

//o(log n)

var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};
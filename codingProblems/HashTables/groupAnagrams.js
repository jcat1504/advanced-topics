//Given an array of strings, group anagrams together
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

var groupAnagrams = function(strs) {
    strs = strs.sort();
    var mapping = {};
    for (var i = 0; i < strs.length; i++){
        var str = strs[i];
        var sorted = str.split('').sort().join('');

        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }

    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }

    return output;

}

var groupAnagrams = function(strs) {
    let obj = {};
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)
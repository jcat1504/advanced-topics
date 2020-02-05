// Given a non-empty string s and a dictionary wordDict containing a list 
// of non-empty words, determine if s can be segmented into a space-separated 
// sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the 
// segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be 
// segmented as "leet code".

var wordBreak = function(s, wordDict) {
  if (!s.length || !wordDict.length) return false;
  if (s.length === 1){
    return wordDict.includes(s);
  }
  let wordEnds = new Array(s.length + 1).fill(false);
  wordEnds[0] = true;
  
  for(let i = 1; i<= s.length; i++){
    for(let j = 0; j < i; j++){
      if (wordEnds[j] && wordDict.includes(s.substring(j, i))){
        wordEnds[i] = true;
        break;
      }
    }
  }
  return wordEnds.pop();
};

//MY SOLUTION
function applePie(s, wordDict) {

let wordDict = [1,2,3];

	for (let i = 0; i < wordDict.length; i++) {
		s = s.split(wordDict[i]).join('');
    }
    return s.split('').join('').length === 0;

    let set = [...new Set(wordDict)]

    console.log(wordDict)
};



// let arrayOne = ['1','2','1']
// let set = [...new Set(arrayOne)];
// console.log(set)
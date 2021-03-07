var longestPalindrome = function(s){
    var max ='';
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < 2; j++) {
            var left = i;
            var right = i + j;
            while(s[left] && s[left] === s[right]){
                left --;
                right++;
            }
            if ((right-left-1) > max.length) {
                max = s.substring(left+1, right)
            }
        }
    }
}

//solution 2
var longestPalindrome = function(s) {
  let ans = 0;
  let keys = {};
  
  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
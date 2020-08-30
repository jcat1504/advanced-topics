var canPermutePalindrome = function(s) {
    var hash = {};
    for(var i = 0; i < s.length; i++){
        if(!hash[s[i]])hash[s[i]] = 1;
        else hash[s[i]]++;
    }
    var count = 0;
    for(j in hash){
        if(hash[j]%2 !== 0 )count++;
        if(count > 1)return false
    }
    return true
};
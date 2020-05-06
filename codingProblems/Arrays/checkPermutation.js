function sortChar(s){
    let content = [];
    s.sort.content.push(s);
    return content;
}

function permutation(s, t) {
    if (s.length !== t.length) {
        return false
    }
    return sortChar(s).equals(sortChar(t))
}

function checkPermutation(str1, str2) {
    if (str1.length != str2.length) {
        return false
    }

    var myHash = [];

    for (var i=0;i<str1.length;i++){
        if (myHash[str1[i]]){
            myHash[str1.charAt(i)]++;
        } else {
            myHash[str1.charAt(i)] = 1;
        }
        for (i in myHash) {
            if (myHash[i] !== 0) {
                return false
            }
        }
        return true
    }
}

//check if strings have the same length
//count each char in first string. we use hash table and use each char in first string as a hash key. for each key, we will then  increment
//using the second string, we can then decrement the count
//go back thru the first string, and see if each value for the hash is equal to 0. if all 0, we have a permutation
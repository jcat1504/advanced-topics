//isUnique: Implement an algorithm to determine if a string has all 
// unique characters. What if you cannot use additional data structures?

var isUnique = (s) => {
    var chars = {};
    //storing value in hashtable
    var dup = true;
    //putting duplicates as true, just gonna assume

    for (var i=0;i<s.length; i++){
        if ((s[i] === chars)){
            return false;
            //if there is a duplicate return false
        }
        chars[s[i]] = 1;
    }
    return dup;
}
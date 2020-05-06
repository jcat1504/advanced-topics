//oneaway--there are three types of edits that can be performed on a string--insert char, remove, replace. given two strings, write a function to check if they
//are one or two edits away

//ANALYSIS--WHAT DOES EACH MEAN? 
//replacement: bale --> pale, one replacement away, just in 1 order
//insertion: apple --> aple, one insertion away, a shift at one point
//removal: apple --> aple, one removal away, an inverse of insertion

function oneEditAway(first, second){
    if (first.length == second.length){
        return oneEditReplace(first,second);
    } else if (first.length + 1 == second.length){
        return oneEditInsert(first, second)
    } else if (first.length -1 == second.length) {
        return oneEditInsert(second, first)
    }
    return false
}

function oneEditReplace(s1, s2) {
    var foundDifference = false;
    for (var i = 0; i < s1.length; i++){
        if(s1.charAt(i) != s2.charAt(i)) {
            if (foundDifference){
                return false
            }
            foundDifference = true;
        }
    }
    return true;
}

//check if you can insert a char in s1 to make s2

function oneEditInsert(s1, s2){
    var index1 = 0;
    var index2 = 0;
    while(index2 < s2.length && index1 < s1.length){
        if (s1.charAt(index1) != s2.charAt(index2)) {
            if (index1 != index2) {
                return false
            }
            index2++;
        } else {
            index1++,
            index2++
        }
    }
    return true;
}
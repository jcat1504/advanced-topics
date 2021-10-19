//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    var temp = [];
    var map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    
    for(var i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
            temp.push(s[i]);
        else if(map[temp.pop()] !== s[i]){
            return false;
        }
    }
    
    if(temp.length > 0)
        return false;
    else
        return true;
};

//o(n) - we are creating a for loop to scan for any inputs of parenthesis
// we are adding characters to temp array, and deleting elements if they don't match, but it does
//not throw off the position of array
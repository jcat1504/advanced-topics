//Determine whether an integer is a palindrome. 
//An integer is a palindrome when it reads the same backward as forward.

//Follow up: Could you solve it without converting the integer to a string?

let isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    return x === reversedInteger(x);
};

let reversedInteger = function(x) {
    let reversed = 0;

    while (x > 0 ) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return reversed;
}

//solution 2
var isPalindrome = function(x) {
    if (x < 0) return false 
    let rev = 0;

    for(let i=x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
    return rev === x
}

//complete comparison between i and x

//solution 3//
var isPalindrome = function(x) {
    const arr =  String(x).split(' ');
    while(arr.length > 1) {
        if(arr.shift() !== arr.pop()) {
            return false
        }
    }
    return true
}

//solution 4
var isPalindrome = function(x) {
    if (x < 0) return false;
	
    // reverse the string representation of x
    const reverse = `${x}`.split('').reverse().join('');
    // compare the value regardless of types
    return x == reverse;
};
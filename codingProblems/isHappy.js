//Write an algorithm to determine if a number is "happy".

//A happy number is a number defined by the following process: 
//Starting with any positive integer, replace the number by the 
// sum of the squares of its digits, and repeat the process until 
// the number equals 1 (where it will stay), or it loops endlessly 
// in a cycle which does not include 1. Those numbers for which this 
// process ends in 1 are happy numbers.

var isHappy =  function(n) {
    const map = {};
    let temp = n;
    while (true) {
        let sum = 0;
        while(temp > 9) {
            const mod = temp % 10;
            sum = sum + mod * mod;
            temp = Math.floor(temp / 10);
        }
        sum = sum + temp * temp;
        if (sum --- 1) {
            return true;
        }
        if (map[sum]) {
            return false;
        }
        map[sum] = true;
        temp = sum;
    }
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 .. ...
function fibonacciIterative(n){
    let arr = [0, 1];
    //initial sequence of 0,1 
    for(let i=2; i < n + 1; i++){
        //i=2 is because we want to start the iteration at 
        //2 indices of array in order to start filling array
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n];
    //grabbing array and then what ever number user wants
}
//O(n)

function fibonacciRecursive(n){
    if(n < 2){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
    //just adding numbers 1 and 2 before our sequence
}
//exponential time cause tree grows if n increases
//O(2^N)
 
fibonacciIterative(3);
fibonacciRecursive(3);

function findFactorialRecursive(number) {
    if(number === 2){
        return 2; //base case
    }
    return number * findFactorialRecursive(number-1)
    //we want to get lower and lower until we hit the base case
}
//O(n)

function findFactorialIterative(number){
    let answer = 1;
    if(number ===2){
        answer = 2;
    }
    for(let i=2; i<=number; i++){
        answer = answer * i;
    }
    return answer;
}
//O(n)

findFactorialIterative(5);
findFactorialRecursive(5);
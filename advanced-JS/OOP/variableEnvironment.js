//VARIABLE ENVIRONMENT
//^a place where variables can live in these diff stack worlds
//each execution context has its own variable environment

//SCOPE CHAIN: links and gives access to variables in parent environment(global environment)
//each function has their own variable environment, and they ALL have access to global variables

function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c';
            return 'Jessicat'
        }
    }
}

sayMyName() () () //=> 'Jessicat'
//we have to invoke it 3 times. This is because invoking the first function will
//just provide function sayMyName and findName scope.
//findName's lexical environment is sayMyName
//printName's lexical environment is findName

'use strict'
//^^a way of preventing JS for doing these weird unpredictable edge cases
function weird() {
    height = 50;
    return height;
}
//50 is returned, which is weird because height is not in variable environment
//so why? because JS sees that when something is assigned, it'll create that variable for you in the scope

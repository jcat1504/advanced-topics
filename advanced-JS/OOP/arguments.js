function marry2(...args){
console.log(Array.from(arguments));
return `${args[0]} is now married to ${args[1]}`
//^ a way to iterate thru arguments
}

//avoid using 'arguments' because it is built in JS

marry2('Tim', 'Tina');

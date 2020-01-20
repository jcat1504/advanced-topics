//create a function that reverses a string

function reverse(str){
    return str.split("").reverse().join("")
}

0(1)

console.log(reverse("hello"));
//turn into array of strings
//split string. str.split(" ")
//reverse str. str.reverse()
//return function?

function reverse2(str){
    //check input 
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >=0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
}

reverse2("Hello there!")

const reverse3 = str => [...str].reverse().join('');
reverse3("Hello I am reversed string")
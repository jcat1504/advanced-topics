//given input string 's', reverse order of words
//word is defined as a sequence of non-space characters. words in 's' will be seperated by at least one space
//'s' may containing leading/trailing spaces or mult spaces between two words
//return string should have single space between words 

function reverseWord(s) {
    const ret = [];
    let word = [];

    for(let i=0; i < s.length; i++) {
        if (s.charAt(i) === '  '){
            //if we found the space, put the word in front, if any
            word.length > 0 && ret.unshift(word.join(' '));
            //reset the current word
            word = [];
        }
        else {
            //add characters to current word
            word.push(s.charAt(i));
        }
    }
    //if current word exists, add it to the front 
    word.length > 0 && ret.unshift(word.join(' '));
    return ret.join(' ');
};
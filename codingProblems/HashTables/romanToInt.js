var romanToInt = function(s) {
	/* define an object to be dictionary */
    const ROMAN_NUMERALS = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    
	/* define a variable to record result */
    let sum = 0;
    
    /* loop string from end to start */
    for(let i = s.length - 1; i >= 0; i--) {
        /* get current number and previous number according to the dictionary */
        let current = ROMAN_NUMERALS[s[i]], prev = ROMAN_NUMERALS[s[i + 1]];

        /* if previous number exists and current number less than privous one, sum minus current value */
        if(prev && current < prev ) {
            sum -= current;
        }
		/* else sum plus current value */
		else {
            sum += current;
        }
    }
	
	/* return result */
    return sum;
};
//Google Question--Return recurring character
//Given an array=[2,5,1,2,3,5,1,2,4];
//should return 2

//given an array=[2,1,1,2,3,5,1,2,4];
//should return 1

//given an array=[2,3,4,5];
//should return undefined

//naive approach

function firstRecurringCharacter(input) {
    for(let i=0; i < input.length; i++) {
        for(let j= i + 1; j < input.length; j++) {
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
} 

function firstRecurringCharacter2(input) {
    let map={};
    for (let i=0; i<input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined;
}
//O(n)

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])
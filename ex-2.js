const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); //0(1)
    console.log(boxes[1]); //0(1)
}

logFirstTwoBoxes(boxes); // 0(2)

//== 0(1) constant time -- its a flat line no matter what in terms of scalability
//Compose
//Pipe

const compose = (f, g) => (data) => f(g(data))//reads from right to left
const pipe = (f, g) => (data) => g(f(data))//reads from left to right
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);//all pure functions!
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50) //-50 is (data)

//(multiplyby3) is f, (makePositive) is g
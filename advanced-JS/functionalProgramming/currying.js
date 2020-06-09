const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4);
curriedMultiplyBy5(8);
curriedMultiplyBy5(10);
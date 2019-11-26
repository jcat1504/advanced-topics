const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

//push 
strings.push('e'); //0(1)

//pop
strings.pop();
strings.pop(); //0(1)

//unshift
strings.unshift('x')//0(n) why? We add to beginning 
//but suddenly we have to loop thru everything and assign indices again!

//splice
strings.splice(2, 0, 'alien'); //0(n)a
const nemo = ['nemo'];

function findNemo(array){
  const {performance} = require('perf_hooks');
  //define performance first

  //start performance timer
  let t0 = performance.now();
  for (let i=0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found NEMO!');
    }
  }

  //other performance timer
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + 'milliseconds')
}

findNemo(nemo);
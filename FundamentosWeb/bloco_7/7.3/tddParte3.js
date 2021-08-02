const assert = require('assert');
const sumAllNumbers = array => {
  let soma =0
  for(i=0; i<array.length; i+=1){
    soma += array[i];
  }
  return soma
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

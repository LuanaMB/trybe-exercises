const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const mapper = (acc, crr) => {
  return acc.concat(crr)
}

function flatten() {
  const output = arrays.reduce(mapper, [])
  return output
}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]); 

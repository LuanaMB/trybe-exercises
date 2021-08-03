const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  const upperCase = names => names.map((element) => element.toUpperCase()) 
  const namesUpperCase = upperCase(names).join('').split('')
  const count = (acc, curr) => ((curr === 'A') ? acc + 1: acc)
  return namesUpperCase.reduce(count, 0)
}

assert.deepStrictEqual(containsA(), 20); 
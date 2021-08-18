const myRemove = require('../src/ myRemove');

describe('Requisito 2', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () =>{
    expect([ 1, 2, 4 ]).toEqual(myRemove([1, 2, 3, 4], 3));
  })

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () =>{
    expect([ 1, 2, 3, 4 ]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  })

  it('Verifica se o array passado por parâmetro não sofreu alterações', () =>{
    const myList = [5, 6, 7, 8];
    myRemove(myList, 5);
    expect(myList).toEqual(myRemove([5, 6, 7, 8]));
  })

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () =>{
    expect([ 1, 2, 3, 4 ]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});
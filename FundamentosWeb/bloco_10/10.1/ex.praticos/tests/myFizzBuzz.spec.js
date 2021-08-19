const myFizzBuzz = require('../src/ myFizzBuzz');

describe('Requisito 4', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é fizzbuzz', () =>{
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  })

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () =>{
    expect('fizz').toBe(myFizzBuzz(9));
  })

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é buzz', () =>{
    expect('buzz').toBe(myFizzBuzz(5));
  })

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se retorna o próprio número', () =>{
    expect(11).toBe(myFizzBuzz(11));
  })

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é false', () =>{
    expect(false).toBe(myFizzBuzz('11'));
  })

})
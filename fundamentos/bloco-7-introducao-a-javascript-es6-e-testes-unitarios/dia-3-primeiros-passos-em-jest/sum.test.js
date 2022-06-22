const {sum, myRemove, myFizzBuzz} = require('./sum.js');


describe('Testa function sum', () => {

  it('Testa se 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
    });
    
  it('Testa se 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  
  it('Testa se acontece erro se a ou b for string', () => {
    expect(() => { sum(1, '2') }).toThrowError(new Error('parameters must be numbers'));
  })

})

describe('Testa function myRemove', () => {

    it('Verifica se remove o 3 do [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifica se remove o 3 do [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifica se remove o 3 do [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })

})

describe('Testa function myFizzBuzz', () => {

  it('Se número divisível por 3 e 5 retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })

  it('Se número divisível por 3 retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })

  it('Se número divisível por 5 retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })

  it('Caso não seja divisível por 3 ou 5 o próprio número', () => {
    expect(myFizzBuzz(1)).toEqual(1);
  })

  it('Caso número não seja um número retorna false', () => {
    expect(myFizzBuzz('e')).toEqual(false);
  })

})
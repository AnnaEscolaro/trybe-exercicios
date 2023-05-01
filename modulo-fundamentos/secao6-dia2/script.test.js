const myRemove = require('./script.js');

describe('testa funcao remove', () => {
  it('verifica', () => {
    expect(myRemove([1, 2, 3, 4], 3).toEqual([1, 2, 4]));
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

const myFizzBuzz = require('./script.js');

describe('testa fizzbuzz', () => {
  it('verificacoes', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(12)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('2')).toBe(false);
  });
});
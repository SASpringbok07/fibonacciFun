import { fibFunctions } from './fibFunctions.js';

test('0 fib compute is 0', () => {
    expect(fibFunctions.fib(0)).toBe(0);
});

test('6th fib compute is 8', () => {
    expect(fibFunctions.fib(6)).toBe(8);
});

test('Fib numbers calculating correctly upto 55', () => {
    let fibNums = [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55 ];
    expect(fibFunctions.fibPopulate(55)).toEqual(fibNums);
});

test('Even summation of [0,1,1,2,3,5,8,13] is 10', () => {
    expect(fibFunctions.fibEvenSum([0,1,1,2,3,5,8,13])).toBe(10);
});
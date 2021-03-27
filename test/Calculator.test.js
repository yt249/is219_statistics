const Calculator = require('../src/Calculator');
const op = require('../src/Operations/MathOperations');

test('Calculator sum function', () => {
    expect(Calculator.sum('hi',2)).toBe('Input should be numbers!');
    expect(Calculator.sum(1,2).GetResults()).toBe(3);
});
test('Calculator difference function', () => {
    expect(Calculator.difference(1,2).GetResults()).toBe(-1);
});
test('Calculator product function', () => {
    expect(Calculator.product(1,2).GetResults()).toBe(2);
});
test('Calculator quotient function', () => {
    expect(Calculator.quotient(1,2).GetResults()).toBe(.5);
});
test('Calculator exponential function', () => {
    expect(Calculator.exponentiation(2,2).GetResults()).toBe(4);
});
test('Calculator root function', () => {
    expect(Calculator.root(4,2).GetResults()).toBe(2);
});

test('Calculator adding to calculations', () => {
    Calculator.calculations = [];
    Calculator.addCalculation(1);
    Calculator.product(1,2);
    Calculator.exponentiation(1,2);
    Calculator.difference(1,2);
    expect(Calculator.calculations.length).toBe(4);
});
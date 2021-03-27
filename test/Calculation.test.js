const Calculation = require('../src/Models/Calculation');
const op = require('../src/Operations/MathOperations');

test('Test of Calculation instantiation', () => {
    let calculation = new Calculation(op.difference, 1,3);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(3);
    expect(calculation.op).toBe(op.difference);
});

test('numberCheck function', () => {
    let a = [1, 2];
    let b = ["Hello", 1];
    let c = "hi";
    let d = 123;
    expect(Calculation.numberCheck(a)).toStrictEqual([1, 2]);
    expect(() => { Calculation.numberCheck(b); }).toThrow('Elements in array should be numbers!');
    expect(() => { Calculation.numberCheck(c); }).toThrow('Input should be numbers!');
    expect(Calculation.numberCheck(d)).toStrictEqual(123);
});

test('Test of Create Function', () => {
    let calculation = Calculation.create(op.difference, 1,3);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(3);
    expect(calculation.op).toBe(op.difference);
});

test('Test of GetResult function', () => {
    let calculation = new Calculation(op.difference, 1, 3);
    expect(calculation.GetResults()).toBe(-2);
});


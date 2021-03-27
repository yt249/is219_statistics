const Operation = require('../src/Operations/MathOperations');

test('Math operations sum function', () => {
    expect(Operation.sum(1,2)).toBe(3);
    expect(Operation.sum([1,2],[3,4])).toBe(10);
    expect(() => { Operation.sum([1,2],[]); }).toThrow('There is empty array!');
    expect(() => { Operation.sum([],[3,4]); }).toThrow('There is empty array!');
});
test('Math operations difference function', () => {
    expect(Operation.difference(1,2)).toBe(-1);
});
test('Math operations product function', () => {
    expect(Operation.product(1,2)).toBe(2);
});
test('Math operations quotient function', () => {
    //expect(Operation.quotient(1,0)).toBe(.5);
    expect(() => { Operation.quotient(1,0); }).toThrow('Cannot divided by 0!');
    expect(Operation.quotient(1,2)).toBe(.5);
});
test('Math operations exponential function', () => {
    expect(Operation.power(2,2)).toBe(4);
});
test('Math operations root function', () => {
    expect(Operation.root(4,2)).toBe(2);
});
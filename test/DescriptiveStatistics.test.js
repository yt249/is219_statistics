const Statistics = require("../src/Statistics/DescriptiveStatistics");

test('1. Mean', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.Mean(list)).toBe(3);
});

test('2. Median', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.Median(list)).toBe(3);
});

test('3. Mode', () => {
    let list2 = [1, 3, 3, 4, 4, 5];
    expect(Statistics.Mode(list2)).toStrictEqual([3, 4]);

});

test('4. Variance', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.Variance(list)).toBe(2.5);
});

test('5. Standard Deviation', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.StandardDeviation(list)).toBe(1.5811388300841898);
});

test('6. Quartiles', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.Quartiles(list)).toStrictEqual([1.5, 4.5]);
    let list2 = [1, 3, 4, 5, 6, 7];
    expect(Statistics.Quartiles(list2)).toStrictEqual([3, 6]);
});

test('7. Skewness', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.Skewness(list)).toBe(0);
});

test('8. Sample Correlation Coefficient', () => {
    let list1 = [1, 2, 3, 4, 5];
    let list2 = [3, 4, 5, 6, 7];
    expect(Statistics.SampleCorrelationCoefficient(list1, list2)).toBe(1);
    let list3 = [1, 2, 3, 4, 5, 6];
    let list4 = [3, 4, 5, 6, 7];
    expect(Statistics.SampleCorrelationCoefficient(list3, list4)).toStrictEqual(false);

});

test('9. Population Correlation Coefficient', () => {
    let list1 = [1, 2, 3, 4, 5];
    let list2 = [3, 4, 5, 6, 7];
    expect(Statistics.PopulationCorrelationCoefficient(list1, list2)).toBe(1);
    let list3 = [1, 2, 3, 4, 5, 6];
    let list4 = [3, 4, 5, 6, 7];
    expect(Statistics.PopulationCorrelationCoefficient(list3, list4)).toStrictEqual(false);
});

test('10. ZScore', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.ZScore(list)).toStrictEqual([-1.2649110640673518, -0.6324555320336759, 0, 0.6324555320336759, 1.2649110640673518]);
});

test('11. MeanDeviation', () => {
    let list = [1, 2 , 3 , 4 , 5];
    expect(Statistics.MeanDeviation(list)).toBe(1.2);
});

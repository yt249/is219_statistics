const RandomGenerator = require('../src/Statistics/RandomGenerator');
const Descriptive = require('../src/Statistics/DescriptiveStatistics');
const PopulationSampling = require('../src/Statistics/PopulationSampling');

seed = 10;

test('1. simple random sample', () => {
    let size = 10;
    let randList = RandomGenerator.SeededRandomListInteger(10,10, 100, size);
    let sampleSize = RandomGenerator.SeededRandomInteger(1, 10, (size));
    let list1 = PopulationSampling.simpleRandomSample(randList, sampleSize, 10 );
    let list2 = PopulationSampling.simpleRandomSample(randList, sampleSize, 10);

    expect(list1).toHaveLength(Math.ceil(sampleSize));
    expect(list1).toEqual(list2);
});

test('2. systematic random sample', () => {
   let size = 10;
   let randList = RandomGenerator.SeededRandomListInteger(seed, 10, 100, size);
   let sampleSize = RandomGenerator.SeededRandomInteger(seed, 1, size - 1);
   let sampleList = PopulationSampling.systematicSample(randList, sampleSize);

   expect(sampleList).toHaveLength(sampleSize);
});

test('z score from confidence', () => {
    expect(PopulationSampling.getZScoreFromConfidence(85)).toEqual(1.44);
    expect(PopulationSampling.getZScoreFromConfidence(95)).toEqual(1.96);
});

test('4. margin of error', () => {
    let size = 10;
    let sampleList = RandomGenerator.SeededRandomListInteger(seed, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.SeededRandomInteger(seed, 50, 95) / 5) * 5;
    let marginOfError = PopulationSampling.marginOfError(sampleList, confidence);

    expect(marginOfError).toBeGreaterThan(0);
});

test('5. confidence interval', () => {
    let size = 10;
    let sampleList = RandomGenerator.SeededRandomListInteger(seed, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.SeededRandomInteger(seed, 50, 95) / 5) *5;
    let confidenceInterval = PopulationSampling.confidenceInterval(sampleList, confidence);

    let mean = Descriptive.Mean(sampleList);
    expect(confidenceInterval).toHaveLength(2);
    expect(confidenceInterval[0]).toBeLessThan(mean);
    expect(confidenceInterval[1]).toBeGreaterThan(mean);
});

test('6. cochran sample size', () => {
    expect(PopulationSampling.cochran(95, 5, 0.5, 1000)).toEqual(278);
});

test('7. sample size with no std dev', () => {
    expect(PopulationSampling.sampleSizeNoStdDev(95, 10, 0.5)).toBeGreaterThan(0);
});

test('8. sample size with std dev', () => {
    let size = 10;
    let sampleList = RandomGenerator.SeededRandomListInteger(100, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.SeededRandomInteger(100, 50, 95) / 5) * 5;
    let stdDev = Descriptive.StandardDeviation(sampleList);

    expect(PopulationSampling.sampleSizeStdDev(confidence, 10, stdDev)).toBeGreaterThan(0);
});
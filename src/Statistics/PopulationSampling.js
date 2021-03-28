const Random = require('./RandomGenerator');
const Descriptive = require('./DescriptiveStatistics');


const perToZScore = new Map ([
    [1, 0.01], [2, 0.02], [3, 0.04], [4, 0.05], [5, 0.06], [6, 0.08], [7, 0.09], [8, 0.1], [9, 0.11], [10, 0.13],
    [11, 0.14], [12, 0.15], [13, 0.16], [14, 0.18], [15, 0.19], [16, 0.2], [17, 0.21], [18, 0.23], [19, 0.24], [20, 0.25],
    [21, 0.27], [22, 0.28], [23, 0.29], [24, 0.31], [25, 0.32], [26, 0.33], [27, 0.35], [28, 0.36], [29, 0.37], [30, 0.39],
    [31, 0.4], [32, 0.41], [33, 0.43], [34, 0.44], [35, 0.45], [36, 0.47], [37, 0.48], [38, 0.5], [39, 0.51], [40, 0.52],
    [41, 0.54], [42, 0.55], [43, 0.57], [44, 0.58], [45, 0.6], [46, 0.61], [47, 0.63], [48, 0.64], [49, 0.66], [50, 0.67],
    [51, 0.69], [52, 0.71], [53, 0.72], [54, 0.74], [55, 0.76], [56, 0.77], [57, 0.79], [58, 0.81], [59, 0.82], [60, 0.84],
    [61, 0.86], [62, 0.88], [63, 0.9], [64, 0.92], [65, 0.93], [66, 0.95], [67, 0.97], [68, 0.99], [69, 1.02], [70, 1.04],
    [71, 1.06], [72, 1.08], [73, 1.1], [74, 1.13], [75, 1.15], [76, 1.17], [77, 1.2], [78, 1.23], [79, 1.25], [80, 1.28],
    [81, 1.31], [82, 1.34], [83, 1.37], [84, 1.41], [85, 1.44], [86, 1.48], [87, 1.51], [88, 1.55], [89, 1.6], [90, 1.64],
    [91, 1.7], [92, 1.75], [93, 1.81], [94, 1.88], [95, 1.96], [96, 2.05], [97, 2.17], [98, 2.33], [99, 2.57]
]);

class PopulationSampling {
    static getZScoreFromConfidence(confidence) {
        let percentage = Math.floor(confidence);
        return perToZScore.get(percentage);
    }

    // 1. simple random sample
    static simpleRandomSample(list, sampleSize, seed) {
        return Random.SeededRandomMultiSelection(seed, list, sampleSize);
    }

    // 2. systematic sampling
    static systematicSample(list, sampleSize) {
        let aList = [];
        let picker = 0;
        for (picker = Math.floor(Math.random() * list.length) + 1; aList.length < sampleSize; picker++ ) {
            if(picker === list.length){
                aList.push(list[picker]);
            }
        }
        return aList;
    }

    // 4. margin of error
    static marginOfError(sampleList, confidence) {
        let z = PopulationSampling.getZScoreFromConfidence(confidence);
        return z * Descriptive.StandardDeviation(sampleList) / (sampleList.length ** 0.5);
    }

    // 3. confidence interval for sample
    static confidenceInterval(sampleList, confidence = 95) {
        if (sampleList.length === 0) {
            throw("ERROR: Empty list, can't divide by 0");
        }

        let mean = Descriptive.Mean(sampleList);
        let marOfErr = PopulationSampling.marginOfError(sampleList, confidence);
        let confInt1 = mean - marOfErr;
        let confInt2 = mean + marOfErr;
        let confIntList = [confInt1, confInt2];
        return confIntList;
    }

    // 6. cochran's sample size formula
    static cochran(confidence, error,p=0.5, N=null) {
        let z = PopulationSampling.getZScoreFromConfidence(confidence);
        let n = z**2 * p * (1-p) / (error/100)**2;
        if (N != null) {
            n = n / (1 + (n-1)/N);
        }
        return Math.ceil(n);
    }

    // 7. sample size given a confidence interval and width (unknown population std dev)
    static sampleSizeNoStdDev(confidence, width, p=0.5) {
        width = width / 2;
        return PopulationSampling.cochran(confidence, width, p);
    }
    // 8. sample size given a confidence interval and width (known population std dev)
    static sampleSizeStdDev(confidence, width, stdDev) {
        let z = PopulationSampling.getZScoreFromConfidence(confidence);
        return (z * stdDev / width) ** 2;
    }
}
module.exports  = PopulationSampling;
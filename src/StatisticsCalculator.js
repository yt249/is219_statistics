const Calculator = require('./Calculator');
//const Calculation = require('./Models/Calculation');
const DesStats = require('./Statistics/DescriptiveStatistics');

class StatisticsCalculator extends Calculator {

    // -------------1--------------
    static Mean(a) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.Mean, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------2--------------
    static Median(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.Median, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------3--------------
    static Mode(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.Mode, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------4--------------
    static Variance(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.Variance, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------5--------------
    static StandardDeviation(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.StandardDeviation, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------6--------------
    static Quartiles(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.Quartiles, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------7--------------
    static Skewness(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.Skewness, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------8--------------
    static SampleCorrelationCoefficient(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.SampleCorrelationCoefficient, a, b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------9--------------
    static PopulationCorrelationCoefficient(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.PopulationCorrelationCoefficient, a, b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------10--------------
    static ZScore(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.ZScore, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }

    // -------------11--------------
    static MeanDeviation(a, b) {
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(DesStats.MeanDeviation, a);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return(e);
        }
    }
}

module.exports = StatisticsCalculator;


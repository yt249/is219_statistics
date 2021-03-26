class Statistics {
    // -------------1--------------
    static Mean(list){
        let total = 0;
        for (let i = 0; i < list.length; i++) {
            total += list[i];
        }
        return total / list.length;
    }
    // -------------2--------------
    static Median(list){
        let median = 0;
        let len = list.length;
        list.sort(function(a, b) {
            return a - b;
        });
        if (len % 2 === 0) {
            median = (list[len/2-1] + list[len/2])/2;
        } else {
            median = list[(len-1)/2];
        }
        return median;
    }
    // -------------3--------------
    static Mode(list){
        let modes = [];
        let count = {};
        let maxIndex = 0;
        for (let i = 0; i < list.length; i++) {
            let num = list[i];
            count[num] = (count[num] || 0) + 1;
            if (count[num] > maxIndex) {
                maxIndex = count[num];
            }
        }
        for (let i in count)
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        return modes;
    }
    // -------------4--------------
    // for sample
    static Variance(list){
        let mean = this.Mean(list);
        let total = 0;
        for (let i = 0; i < list.length; i++){
            total += (list[i] - mean) ** 2;
        }
        return total / (list.length-1);
    }
    // -------------5--------------
    static StandardDeviation(list){
        return Math.sqrt(this.Variance(list));
    }
    // -------------6--------------
    static Quartiles(list){
        list.sort(function(a, b) {
            return a - b;
        });
        let len = list.length;
        let list1 = [], list2 = [];
        if (len % 2 === 0) {
            list1 = list.slice(0, len/2);
            list2 = list.slice(len/2, len);
        } else {
            list1 = list.slice(0, (len-1)/2);
            list2 = list.slice((len-1)/2+1, len);
        }
        return [this.Median(list1), this.Median(list2)];
    }
    // -------------7--------------
    static Skewness(list){
        let total = 0;
        for (let i = 0; i < list.length; i++){
            total += (list[i] - this.Mean(list)) *
                        (list[i] - this.Mean(list)) *
                        (list[i] - this.Mean(list));
        }

        return total / (list.length * this.StandardDeviation(list) *
            this.StandardDeviation(list) *
            this.StandardDeviation(list));
    }

    // -------------8--------------
    static SampleCorrelationCoefficient(list1, list2) {

        if(list1.length !== list2.length){
            return false;
        }

        let sumX = 0, sumY = 0, sumXY = 0;
        let squareSumX = 0, squareSumY = 0;

        for (let i = 0;i < list1.length;i++){
            // sum of elements of array X.
            sumX = sumX + list1[i];

            // sum of elements of array Y.
            sumY = sumY + list2[i];

            // sum of X[i] * Y[i].
            sumXY = sumXY + list1[i] * list2[i];

            // sum of square of array elements.
            squareSumX = squareSumX + list1[i] * list1[i];
            squareSumY = squareSumY + list2[i] * list2[i];
        }

        return (list1.length * sumXY - sumX * sumY) /
            (Math.sqrt((list1.length * squareSumX -
                sumX * sumX) * (list1.length * squareSumY -
                sumY * sumY)));
    }

    // -------------9--------------
    static PopulationCorrelationCoefficient(list3, list4) {

        if(list3.length !== list4.length){
            return false;
        }

        let sumX = 0, sumY = 0, sumXY = 0;
        let squareSumX = 0, squareSumY = 0;

        for (let i = 0;i < list3.length;i++){
            // sum of elements of array X.
            sumX = sumX + list3[i];

            // sum of elements of array Y.
            sumY = sumY + list4[i];

            // sum of X[i] * Y[i].
            sumXY = sumXY + list3[i] * list4[i];

            // sum of square of array elements.
            squareSumX = squareSumX + list3[i] * list3[i];
            squareSumY = squareSumY + list4[i] * list4[i];
        }

        return (list3.length * sumXY - sumX * sumY) /
            (Math.sqrt((list3.length * squareSumX -
                sumX * sumX) * (list3.length * squareSumY -
                sumY * sumY)));
    }
// -------------10--------------
    static ZScore(list){
        let list2 = [];
        for (let i = 0; i < list.length; i++) {
            list2.push((list[i]-this.Mean(list))/this.StandardDeviation(list));
        }
        return list2;
    }

// -------------11--------------
    static MeanDeviation(list){
        let mean = this.Mean(list);
        let total = 0;
        for (let i = 0; i < list.length; i++){
            total += Math.abs(list[i] - mean);
        }
        return total / list.length;
    }
}

module.exports = Statistics;

let list = [1, 2 , 3 , 4 , 5];
console.log(Statistics.Quartiles(list));
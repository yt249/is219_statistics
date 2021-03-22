class Addition {

    static Sum(a,b) {
        return a + b;
    }

    static SumList(arr){
        let total = 0;
        for (let i = 0; i < arr.length; i++){
            total += arr[i];
        }
        return total;
    }
}


module.exports = Addition;
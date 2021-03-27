class MathOperations {

    static sum(a,b){
        let tempa = a, tempb = b;
        if(Array.isArray(a))
            // 7. throw exception for empty list
            if (a.length===0)
                throw 'There is empty array!';
            else
                tempa = a.reduce((a, b) => a + b);
        if (Array.isArray(b))
            if (b.length===0)
                throw 'There is empty array!';
            else
                tempb = b.reduce((a, b) => a + b);
        return tempa + tempb;
    }

    static difference(a,b){
        return a - b;
    }

    static product(a,b) {
        return a * b;
    }

    // 6. throw an exception for divide by zero
    static quotient(a,b){
        if (b===0)
            throw 'Cannot divided by 0!';
        else
            return a / b;
    }

    static power(a, b){
        return Math.pow(a,b);
    }

    static root(a, b){
        return Math.pow(a, 1/b);
    }

}

module.exports = MathOperations;
class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    // check if this value or array are all number type
    static numberCheck(a) {
        if (typeof a !== 'number')
            if(Array.isArray(a))
                if (a.every((currentValue) => typeof currentValue == 'number') === true)
                    return a;
                else
                    throw 'Elements in array should be numbers!;'
        else
            throw 'Input should be numbers!';
        else
            return a;
    }

    //Factory function: single responsibility
    // 5. create method is able to detect if it is a number type
    static create(a,b,op){
        return new Calculation(this.numberCheck(a), this.numberCheck(b), op);
    }

    GetResults() {
        return this.op(this.a,this.b);
    }
}
module.exports = Calculation;
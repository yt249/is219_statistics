class Calculation {
    constructor(op, a, b) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    // check if this value or array are all number type
    static numberCheck(a) {
        if (typeof a !== 'number')
            if(Array.isArray(a)) {
                if (a.every((currentValue) => typeof currentValue == 'number') === true)
                    return a;
                else
                    throw 'Elements in array should be numbers!';
            } else if (a===null){
                return a;
            } else
                throw 'Input should be numbers!';
        else
            return a;
    }

    //Factory function: single responsibility
    // 5. create method is able to detect if it is a number type
    static create(op,a,b=null){
        return new Calculation(op, this.numberCheck(a), this.numberCheck(b));
    }
    GetResults() {
        if (this.b===null)
            return this.op(this.a);
        else
            return this.op(this.a,this.b);
    }
}
module.exports = Calculation;

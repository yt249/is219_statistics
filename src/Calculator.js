const Calculation = require('./Models/Calculation');
const Op = require('./Operations/MathOperations');

class Calculator extends Calculation {

    static calculations = [];

    static addCalculation(calculation){
        Calculator.calculations.push(calculation);
    }
    static sum(a, b){
        try {
            // 5. create method is able to detect if it is a number type
            let calculation = this.create(Op.sum,a,b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return e;
        }
    }
    static difference(a, b) {
        try {
            let calculation = this.create(Op.difference,a,b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return e;
        }
    }
    static product(a, b) {
        try {
            let calculation = this.create(Op.product,a,b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return e;
        }
    }
    static quotient(a, b) {
        try {
            let calculation = this.create(Op.quotient, a,b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return e;
        }
    }
    static exponentiation(a, b){
        try {
            let calculation = this.create(Op.power, a,b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return e;
        }
    }
    static root(a, b){
        try {
            let calculation = this.create(Op.root, a,b);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            return e;
        }
    }
}

module.exports = Calculator;
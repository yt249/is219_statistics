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
            let calculation = this.create(a,b,Op.sum);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            console.error(e);
        }
    }
    static difference(a, b) {
        try {
            let calculation = this.create(a,b,Op.difference);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            console.error(e);
        }
    }
    static product(a, b) {
        try {
            let calculation = this.create(a,b,Op.product);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            console.error(e);
        }
    }
    static quotient(a, b) {
        try {
            let calculation = this.create(a,b,Op.quotient);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            console.error(e);
        }
    }
    static exponentiation(a, b){
        try {
            let calculation = this.create(a,b,Op.power);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            console.error(e);
        }
    }
    static root(a, b){
        try {
            let calculation = this.create(a,b,Op.root);
            this.addCalculation(calculation);
            return calculation;
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = Calculator;
/**
 * (Q) Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this within these methods such that method chaining of add, subtract, multiply and divide is possible.
 */

function Calculator() {
    this.value = 0;
}

Calculator.prototype.add = function (number) {
    this.value += number;
    return this;
}

Calculator.prototype.subtract = function (number) {
    this.value -= number;
    return this;
}

Calculator.prototype.multiply = function (number) {
    this.value *= number;
    return this;
}

Calculator.prototype.divide = function (number) {
    if (number !== 0) {
        this.value /= number;
    } else {
        console.error("Cannot divide by zero");
    }
    return this;
}

Calculator.prototype.getResult = function () {
    return this.value;
}

let calc = new Calculator();
let result = calc.add(10).subtract(2).multiply(3).divide(4).getResult();
console.log(result); // Output: 6

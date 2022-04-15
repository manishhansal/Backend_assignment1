const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

let number1 = 10;
let number2 = 5;

let addition = add(number1, number2);
console.log(addition);

let subtraction = subtract(number1, number2);
console.log(subtraction);

let multiplication = multiply(number1, number2);
console.log(multiplication);

let division = divide(number1, number2);
console.log(division);
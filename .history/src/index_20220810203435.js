const displayLastValue = document.getElementById('last-value');
const displayActualValue = document.getElementById('actual-value');
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const calculator = new Calculator();
console.log(calculator.sum(5,7));
console.log(calculator.div(5,7));
console.log(calculator.res(5,7));
console.log(calculator.sum(5,7));

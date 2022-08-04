const displayLastValue = document.getElementById("last-value");
const displayActualValue = document.getElementById("actual-value");
const numbersButtons  = document.querySelectorAll("number");
const operatorButtons = document.querySelectorAll("operator");


const calculator = new Calculator();
console.log(calculator.sumar());
console.log(calculator.restar());
console.log(calculator.multiplicar());
console.log(calculator.sumar());
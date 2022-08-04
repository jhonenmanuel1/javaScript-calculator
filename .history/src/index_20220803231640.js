const displayLastValue = document.getElementById("last-value");
const displayActualValue = document.getElementById("actual-value");
const numbersButtons  = document.querySelectorAll("number");
const operatorButtons = document.querySelectorAll("operator");

const display = new Display(displayLastValue, displayActualValue);
numbersButtons.forEach(b =>{
    b.addEventListener('click', ()=>{
        display.addNumber(b.innerHTML);
    });
});
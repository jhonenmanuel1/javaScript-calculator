const displayLastValue = document.getElementById('last-value');
const displayActualValue = document.getElementById('actual-value');
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const calculator = new Calculator();
const display = new Display(displayLastValue,  displayActualValue);

numberButtons.forEach(boton =>
    boton.addEventListener('click', ()=>{
        display.addNumber(boton.innerHTML)
    })
    );
operatorButtons.forEach(b =>
    console.log(b)
    b.addEventListener('click', ()=> display.computar(b.value))
    )
    
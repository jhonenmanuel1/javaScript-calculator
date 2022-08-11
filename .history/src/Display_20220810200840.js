class Display{
    constructor(displayLastValue, displayActualValue){
        this.displayActualValue = displayActualValue;
        this.displayLastValue = displayLastValue;
        this.calculator = new Calculator();
        this.actualValue = '';
        this.lastValue = '';
    }
    addNumber(num){
        this.actualValue = num;
        this.printValues();
    }
    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayLastValue.textContent = this.lastValue;
    }
   
}
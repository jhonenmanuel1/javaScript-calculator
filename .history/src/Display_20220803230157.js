class Display{
    constructor(displayLastValue, displayActualValue){
        this.displayActualValue = displayActualValue;
        this.displayLastValue =displayLastValue;
        this.calculator = new Calculator();
        this.actualValue = '';
        this.lastValue = '';
    }
    addNumber(num){
        this.actualValue = num;
    }
}
class Display {
    constructor(displayLastValue,displayActualValue ){
        this.displayActualValue = displayActualValue;
        this.displayLastValue = displayLastValue;
        this.operatorType = undefined;
        this.calculator = new Calculator();
        this.actualValue = ``;
        this.lastValue =``;


    }
    borrar (){
        this.actualValue = this.actualValue.slice(0,-1)
        this.printValues();
        this.operatorType= undefined
        
    }
    borrarTodo(){
        this.actualValue = '';
        this.lastValue = '';
        this.printValues();
    }
    addNumber(num){
        if(num ==='.' && this.actualValue.includes('.') ) return
        this.actualValue = this.actualValue.toString() + num.toString();
        this.printValues();

    }
    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayLastValue.textContent = this.lastValue
    }
}
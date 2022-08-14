class Display {
    constructor(displayLastValue,displayActualValue ){
        this.displayActualValue = displayActualValue;
        this.displayLastValue = displayLastValue;
        this.operatorType = undefined;
        this.calculator = new Calculator();
        this.actualValue = ``;
        this.lastValue =``;
        this.signos ={
            sum:'+',
            res:'-',
            mul:'*',
            div:'/'           
        }


    }
    borrar (){
        this.actualValue = this.actualValue.slice(0,-1);
        this.printValues();
        
    }
    borrarTodo(){
        this.actualValue = '';
        this.lastValue = '';
        this.operatorType = undefined;
        this.printValues();
    }
    computar(tipo){
        this.operatorType !== 'igual' && this.calc();
        this.operatorType = tipo;
        this.lastValue = this.actualValue || this.lastValue;
        this.actualValue = '';
        this.printValues();
        console.log('si ta funcionando');


    }
    
    addNumber(num){
        if(num ==='.' && this.actualValue.includes('.') ) return
        this.actualValue = this.actualValue.toString() + num.toString();
        this.printValues();

    }
    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayLastValue.textContent = `${this.lastValue}  ${this.signos(this.operatorType)}`;
        console.log(this.operatorType)
    }
  
    calc(){
        const lastValue  = parseFloat(this.lastValue);
        const actualValue = parseFloat(this.actualValue);

        if ( isNaN(actualValue) || isNaN(lastValue)) return
        this.actualValue = this.calculator[this.operatorType](lastValue,actualValue);
    }
}
 class Calculator{
    currentValue : number;
    oldValue : number;
    operator: string | null;

    construct(){
        this.oldValue = 0;
        this.currentValue = 0;
        this.operator = null;
        
    }

    inputDigit(digit : number){
        this.currentValue = digit;
    }

    inputOperator(operator : string):void{
        if(this.operator !== null){
            this.calculate();
        }
        this.oldValue = this.currentValue;
        this.currentValue = 0;
        this.operator = operator;
    }

    calculate():void{
        if(this.operator !== null){
            switch(this.operator){
                case "+":
                 this.currentValue += this.oldValue;
                 break;

                case "-":
                 this.currentValue -= this.oldValue;
                 break;

                case "*":
                 this.currentValue *= this.oldValue;
                 break;
                
                case "/":
                 if(this.currentValue !== 0){
                    this.currentValue /= this.oldValue;
                 } else{
                    console.error("You cant.");
                 }                 
                 break;
            }
            this.operator = null;
        }
    }

    getCurrentValue():number{
        return this.currentValue;
    }

    clear(){
        this.currentValue = 0;
        this.oldValue = 0;
        this.operator = null;
    }

}

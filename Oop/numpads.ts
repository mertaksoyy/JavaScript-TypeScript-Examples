import {Calculator} from './calculator';
import {AppScreen} from './screen';

export class NumPads{

    private calculator: Calculator;
    private screen : AppScreen;

    constructor(calculator: Calculator, screen: AppScreen) {
        this.calculator = calculator;
        this.screen = screen;
        this.initialize();
      }

    
    


}
import { AppScreen } from "./screen";

export class Calculator {
    currentValue: number;
    oldValue: number;
    operator: string | null;
    screen: AppScreen;

    constructor(screen: AppScreen) {
        this.oldValue = 0;
        this.currentValue = 0;
        this.operator = null;
        this.screen = screen; // AppScreen sınıfını Calculator'a ekle
    }

    inputDigit(digit: number): void {
        this.currentValue = this.currentValue * 10 + digit;
        this.screen.update(this.currentValue.toString()); // Ekranı güncelle
    }

    inputOperator(operator: string): void {
        if (this.operator !== null) {
            this.calculate();
        }
        this.oldValue = this.currentValue;
        this.currentValue = 0;
        this.operator = operator;
        this.screen.clear(); // Ekranı temizle
    }

    calculate(): void {
        if (this.operator !== null) {
            switch (this.operator) {
                case "+":
                    this.currentValue = this.oldValue + this.currentValue;
                    break;
                case "-":
                    this.currentValue = this.oldValue - this.currentValue;
                    break;
                case "*":
                    this.currentValue = this.oldValue * this.currentValue;
                    break;
                case "/":
                    if (this.currentValue !== 0) {
                        this.currentValue = this.oldValue / this.currentValue;
                    } else {
                        console.error("You can't divide by zero.");
                    }
                    break;
                default:
                    console.error("Unknown operator");
                    break;
            }
            this.operator = null;
            this.screen.update(this.currentValue.toString()); // Sonucu ekranda göster
        }
    }

    getCurrentValue(): number {
        return this.currentValue;
    }

    clear(): void {
        this.currentValue = 0;
        this.oldValue = 0;
        this.operator = null;
        this.screen.clear(); // Ekranı temizle
    }
}

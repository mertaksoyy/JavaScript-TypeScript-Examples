class AppScreen {
    private display: HTMLDivElement;

    constructor(screenId: string) {
        this.display = document.getElementById(screenId) as HTMLDivElement;
        if (!this.display) {
            throw new Error(`Element with id ${screenId} not found.`);
        }
    }

    clear(): void {
        this.display.innerText = "";
    }

    update(value: string): void {
        this.display.innerText = value;
    }
}

class Calculator {
    currentValue: number;
    oldValue: number;
    operator: string | null;
    screen: AppScreen;

    constructor(screen: AppScreen) {
        this.oldValue = 0;
        this.currentValue = 0;
        this.operator = null;
        this.screen = screen;
    }

    inputDigit(digit: number): void {
        this.currentValue = this.currentValue * 10 + digit;
        this.screen.update(this.currentValue.toString());
    }

    inputOperator(operator: string): void {
        if (this.operator !== null) {
            this.calculate();
        }
        this.oldValue = this.currentValue;
        this.currentValue = 0;
        this.operator = operator;
        this.screen.clear();
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
            this.screen.update(this.currentValue.toString());
        }
    }

    getCurrentValue(): number {
        return this.currentValue;
    }

    clear(): void {
        this.currentValue = 0;
        this.oldValue = 0;
        this.operator = null;
        this.screen.clear();
    }
}

class Numpad {
    private calculator: Calculator;
    private screen: AppScreen;

    constructor(calculator: Calculator, screen: AppScreen) {
        this.calculator = calculator;
        this.screen = screen;
    }

    handleButtonClick(value: string): void {
        if (!isNaN(Number(value))) {
            this.calculator.inputDigit(Number(value));
        } else if (["+", "-", "*", "/"].includes(value)) {
            this.calculator.inputOperator(value);
        } else if (value === "=") {
            this.calculator.calculate();
        } else if (value === "C") {
            this.calculator.clear();
        }
    }
}

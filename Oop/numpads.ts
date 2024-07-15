import { Calculator } from "./calculator";
import { AppScreen } from "./screen";

class Numpad {
  private calculator: Calculator;
  private screen: AppScreen;

  constructor(calculator: Calculator, screen: AppScreen) {
      this.calculator = calculator;
      this.screen = screen;
  }

  // Numpad'deki bir tuşa basıldığında çağrılan metot
  handleButtonClick(value: string): void {
      if (!isNaN(Number(value))) {
          // Eğer değer bir sayıysa, inputDigit fonksiyonunu çağır
          this.calculator.inputDigit(Number(value));
      } else if (["+", "-", "*", "/"].includes(value)) {
          // Eğer değer bir operatörse, inputOperator fonksiyonunu çağır
          this.calculator.inputOperator(value);
      } else if (value === "=") {
          // Eğer değer eşittir ise, hesaplama yap
          this.calculator.calculate();
      } else if (value === "C") {
          // Eğer değer 'C' ise, ekranı temizle
          this.calculator.clear();
      }
  }
}

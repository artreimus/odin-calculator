class Calculator {
  constructor(previousOperandDisplay, currentOperandDisplay) {
    this.previousOperandDisplay = previousOperandDisplay;
    this.currentOperandDisplay = currentOperandDisplay;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = null;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    console.log("operation");
  }

  compute() {}

  updateDisplay() {
    currentOperandDisplay.innerText = this.currentOperand;
    previousOperandDisplay.innerText = this.previousOperand;
  }
}

const numbersButton = document.querySelectorAll("[data-number]");
const operationsButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandDisplay = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandDisplay = document.querySelector("[data-current-operand]");

const calculator = new Calculator(
  previousOperandDisplay,
  currentOperandDisplay
);

numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationsButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});


class Calculator {
    constructor(display) {
      this.display = display;
      this.clear();
    }
  
    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case 'x':
          computation = prev * current;
          break;
        case '÷':
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }
  
    updateDisplay() {
      this.display.innerText = this.currentOperand;
    }
  
    sum() {
      this.chooseOperation('+');
    }
  
    subtract() {
      this.chooseOperation('-');
    }
  
    multiply() {
      this.chooseOperation('x');
    }
  
    divide() {
      this.chooseOperation('÷');
    }
  
    computeResult() {
      this.compute();
      this.updateDisplay();
    }
  
    addEventListenerToButtons() {
      const numberButtons = document.querySelectorAll('.number');
      const operationButtons = document.querySelectorAll('.special-number');
      const equalsButton = document.querySelector('.equal');
      const clearButton = document.querySelector('.clear');
  
      numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.appendNumber(button.innerText);
          this.updateDisplay();
        });
      });
  
      operationButtons.forEach(button => {
        button.addEventListener('click', () => {
          switch (button.innerText) {
            case '+':
              this.sum();
              break;
            case '-':
              this.subtract();
              break;
            case 'x':
              this.multiply();
              break;
            case '÷':
              this.divide();
              break;
            default:
              break;
          }
        });
      });
  
      equalsButton.addEventListener('click', () => {
        this.computeResult();
      });
  
      clearButton.addEventListener('click', () => {
        this.clear();
        this.updateDisplay();
      });
    }
  }
  
  const display = document.getElementById('display');
  const calculator = new Calculator(display);
  calculator.addEventListenerToButtons();
  




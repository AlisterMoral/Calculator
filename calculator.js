function add (num1, num2){
return num1 + num2
};

function subtract (num1, num2){
    return num1 - num2
};

function multiply (num1, num2){
    return num1 * num2
};

function divide (num1, num2){
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    }

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";

function operate (operator, num1, num2){
    switch (operator){
        case '+':
         return add (num1, num2);
        case '-':
         return subtract(num1, num2);
        case '*':
         return multiply(num1, num2);
        case '/':
         return divide(num1, num2);
    default:
         return "Invalid operator";
    }
}

function updateDisplay(number) {
    displayValue += number;
    document.getElementById("display").textContent = displayValue;
}
  
function clearDisplay() {
  displayValue = "";
  document.getElementById("display").textContent = "";
}

function handleNumberClick(number) {
    updateDisplay(number);
}

function handleEqualClick() {
    if (operator !== "" && firstNumber !== "" && displayValue !== "") {
      secondNumber = displayValue;
      const result = operate(operator, Number(firstNumber), Number(secondNumber));
      displayValue = String(result);
      document.getElementById("display").textContent = displayValue;
      firstNumber = displayValue;
      operator = "";
      secondNumber = "";
      newCalculation = true;
    }
  }

function handleEqualClick() {
    if (operator !== "" && firstNumber !== "" && displayValue !== "") {
      secondNumber = displayValue;
      const result = operate(operator, Number(firstNumber), Number(secondNumber));
      displayValue = String(result);
      document.getElementById("display").textContent = displayValue;
      firstNumber = "";
      operator = "";
      secondNumber = "";
    }
}

function handleOperatorClick(selectedOperator) {
    if (operator === "" && firstNumber === "") {
      firstNumber = displayValue;
      operator = selectedOperator;
      clearDisplay();
    } else if (operator !== "" && firstNumber !== "") {
      secondNumber = displayValue;
      const result = operate(operator, Number(firstNumber), Number(secondNumber));
      displayValue = String(result);
      document.getElementById("display").textContent = displayValue;
      firstNumber = displayValue;
      operator = selectedOperator;
      clearDisplay();
    }
  }

//event listeners to digit
const numberButtons = document.querySelectorAll('.digit');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    handleNumberClick(number);
  });
});

// event listeners to operator
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedOperator = button.textContent;
    handleOperatorClick(selectedOperator);
  });
});

// event listeners to clear button
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', () => {
  clearDisplay();
});

//event listeners to equals button
const equalsButton = document.getElementById('equals-btn');
equalsButton.addEventListener('click', () => {
  handleEqualClick();
});
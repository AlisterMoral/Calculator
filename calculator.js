function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero.";
  }
  return num1 / num2;
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
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
  if (displayValue === "") {
    operator = selectedOperator;
  } else if (operator === "" && firstNumber === "") {
    firstNumber = displayValue;
    operator = selectedOperator;
    clearDisplay();
  } else if (operator !== "" && firstNumber !== "") {
    secondNumber = displayValue;
    const result = operate(
      operator,
      Number(firstNumber),
      Number(secondNumber)
    );
    displayValue = String(result);
    document.getElementById("display").textContent = displayValue;
    firstNumber = displayValue;
    operator = selectedOperator;
    clearDisplay();
  }
}

//event listeners to digit buttons
const numberButtons = document.querySelectorAll(".digit");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    handleNumberClick(number);
  });
});

// event listeners to operator buttons
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedOperator = button.textContent;
    handleOperatorClick(selectedOperator);
  });
});

// event listener for clear button
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", () => {
  clearDisplay();
});

// event listener for equals button
const equalsButton = document.getElementById("equals-btn");
equalsButton.addEventListener("click", () => {
  handleEqualClick();
});

// event listener for keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      handleNumberClick(key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      handleOperatorClick(key);
      break;
    case "Enter":
      handleEqualClick();
      break;
    case "Backspace":
      clearDisplay();
      break;
    default:
      break;
  }
});


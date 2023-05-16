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

let firstNumber = 3;
let operator = '+';
let secondNumber = 5;

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
console.log(operate('+', 6, 6));    // should be 12 
console.log(operate('-', 10, 4));   // should be 6
console.log(operate('*', 2, 6));    // should be 12
console.log(operate('/', 15, 3));   // should be  5
console.log(operate('@', 10, 2));   //  Invalid operator

//works for now !
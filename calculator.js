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
console.log(add(6, 6)); //should be 12
console.log(subtract(10, 4)); //should be 6
console.log(multiply(2, 6));  //should be 12
console.log(divide(15, 3)); //should be 5  
console.log(divide(10, 0)); // error cannot divide by zero   
//works for now ! 
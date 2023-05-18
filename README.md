# Calculator

I started the calculator project by creating multiple function that add,subtract,multiply,divie then tested them in the console.

Created a calculator operation by creating 3 variable 1 for the firstnumber one for the operator and last one for the seconde number.

Then created a new function called operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

Making basic HTML calculator  with button for each digits/operator/function an equal key 

Creating function that populate the display when clicking the number button , storing the 'display value' in a variable.
after this i make the calculator work by storing  number that is input into the calculator  when pressed  and save wich operation has been chosen and then 'operate()' on them when the user press "=" key.
i already have the display so once 'operate()' has been called  it update the display with the solution  to the operation,
then adding event listeners on the button.

I noticed that multiple calcule was not handeling by the calculator so i rework the code to make multiple operation to work such as 12 + 7 - 5 * 3 = should be 42 !

Updating the code, now we can type digits and operator with the keyboard

Finnaly finish the calculator by adding 2 more button the backspace  and the decimal button , i updated the handleNumberClick function to handle decimal input.

Created function  and variable for the decimal buttons with the logic to handle the decimal button and disable it if a decimal point is already present in the display 

adding the backspace button so you can delete the presedent digits, then updated the clearDisplay function to enable the decimal button when the display is cleared.

And at this end finishing by doing a good old css matrix style green and black 
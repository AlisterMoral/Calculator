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
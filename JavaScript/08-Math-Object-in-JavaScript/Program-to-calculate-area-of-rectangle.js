const width = +prompt("Please enter Rectangle width");
const height = +prompt("Please enter Rectangle height");
/** HERE WE ADDED + IN FRONT OF PROMPT FUNCTION TO CONVERT THE RETURNED STRING VALUE INTO NUMBER */
alert(`Area of the rectangle is ${+width * +height}`);  //HERE WE ADD + SIGN AS PREFIX TO THE WIDTH AND HEIGHT BECAUSE THE TYPE OF THE WIDTH AND HEIGHT IS STRING WHICH IS RETURNED BY THE PROMPT SO TO CONVERT INTO INT WE CAN USE + SIGN AS PREFIX

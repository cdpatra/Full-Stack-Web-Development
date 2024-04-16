/** SOME MATH OBJECT'S PROPERTIES */
console.log(Math.PI); //output-> 3.141592653589793
console.log(Math.E); //output-> 2.718281828459045
console.log(Math.LN10); //output-> 2.302585092994046
console.log(Math.SQRT2); //output-> 1.4142135623730951

/** SOME MATH OBJECTS'S METHODS */

console.log(Math.sqrt(16)); //output-> 4
console.log(Math.sqrt(26)); //output-> 5.0990195135927845

console.log(Math.pow(2, 6)); //output-> 64
console.log(2 ** 6); //output-> 64

console.log(Math.floor(2.4)); //output-> 2
console.log(Math.floor(2.999999)); //output-> 2
console.log(Math.floor(2.9999999999999999999999999999)); //output-> 3!!! (IF WE MAKE THE NUMBER TOO CLOSE TO THE INTEGER VALUE THEN JS AUTOMATICALLY ASSUMES IT TO THE INTEGER, SO HERE 2.9999999999999999999999999999 IS INTERNALLY CONVERTED INTO 3 BY JS AND Math.floor(3) = 3 )
console.log(Math.floor(-2.9)); //output-> -3

console.log(Math.ceil(3.4)); //output-> 4
console.log(Math.ceil(2.000000000000000000000001)); //output-> 2!!! (HERE THE REASON OF GETTING 2 IS SAME AS IN THE FLOOR FUNCTION)

console.log(Math.round(2.6)); //output-> 3
console.log(Math.round(2.5)); //output-> 3
console.log(Math.round(2.3)); //output-> 2
console.log(Math.round(-2.5)); //output-> -2
console.log(Math.round(-2.6)); //output-> -3

console.log(
  Math.random()
); /** THIS FUNCTION WILL ALWAYS GIVE A NUMBER BETWEEN 0 TO 1, IT CANNOT BE 1 BUT CAN BE 0 */
console.log(Math.random() * 21); // it will generate number between 0 to 21
console.log(Math.floor(Math.random() * 21)); // it will generate number between 0 to 20

console.log(8 / 0); //output-> Infinity
console.log(-8 / 0); //output-> -Infinity
/** Infinity is a keyword in JS */
console.log(typeof Infinity); //output-> number

console.log(0 / 0); //output-> NaN
console.log(typeof (0 / 0)); //output-> number



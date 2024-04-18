const message = "Hello World!";
console.log(message); //output-> Hello World!
console.log(message[0]); //output-> H
console.log(message[5]); //output-> undefined;   IF INDEX IS OUT OF BOUND THEN IT WILL GIVE UNDEFINED

/** NOTE:- we cannot change string because string is immutable
 * console.log(message[3]="L"); //output-> IT WILL NOT CHANGE THE CHARACTER AT INDEX 3;
 */

console.log("My name is Chinam Dibyadyuti Patra"[0]); //output-> M

/** PROPERTY OF STRING */
console.log(message.length); //output-> 12

/** METHODS OF STRING (without arguments) */
console.log(message.toUpperCase()); //output-> HELLO WORLD!
const capitalMessage = message.toUpperCase();

console.log(message.toLowerCase()); //output-> hello world!

const faltuMessage = "        Hi my name is Chinam Dibyadyuti Patra.    ";
console.log(faltuMessage.trim()); //output-> Hi my name is Chinam Dibyadyuti Patra.
const finalMessage = faltuMessage.trim();

const chainedMessage = faltuMessage.trim().toUpperCase();
console.log(chainedMessage); // output-> HI MY NAME IS CHINAM DIBYADYUTI PATRA.

console.log(faltuMessage.trimStart());
console.log(faltuMessage.trimEnd());

/** METHOD OF STRING (with arguments) */
console.log(finalMessage.includes("my ")); //output-> true

console.log(finalMessage.indexOf("my name")); //output-> 3
console.log(finalMessage.indexOf("z")); //output-> -1

console.log(finalMessage.replace("Hi", "Hello")); //output-> Hello my name is Chinam Dibyadyuti Patra.
console.log(finalMessage.replace("Bye", "Hello")); //output-> Hi my name is Chinam Dibyadyuti Patra.; NO CHANGE IN THE ORIGINAL STRING

console.log(finalMessage.replaceAll("a", "A")); //output-> Hi my nAme is ChinAm DibyAdyuti PAtrA.

console.log(message.concat(finalMessage)); //output-> Hello World!Hi my name is Chinam Dibyadyuti Patra.
console.log(message.concat(" ", finalMessage)); //output-> Hello World! Hi my name is Chinam Dibyadyuti Patra.

const lastFourDigits = "7896";
console.log(lastFourDigits.padStart(16, "*")); //output-> ************7896
console.log(lastFourDigits.padEnd(16, "*")); //output-> 7896************

console.log(finalMessage.charAt(4)); //output-> y

console.log(finalMessage.charCodeAt(4)); //output-> 121; ASCII CODE OF y

console.log(finalMessage.split(" ")); //output-> ['Hi', 'my', 'name', 'is', 'Chinam', 'Dibyadyuti', 'Patra.']

/** TEMPLATE LITERALS */
const templateString = `Last four digit of my account number is ` + lastFourDigits;
console.log(templateString); //output-> Last four digit of my account number is 7896
const concatenatedString = `Last four digit of my account number is `.concat(lastFourDigits);
console.log(concatenatedString); //output-> Last four digit of my account number is 7896
const realWayOfTemplateString = `Last four digit of my account number is ${lastFourDigits.padStart(16, "*")}`;
console.log(realWayOfTemplateString); //output-> script.js:57 Last four digit of my account number is ************7896
const bankBalance = 9878;
const newTemplateString = `I have ₹${bankBalance} in my account`;
console.log(newTemplateString);

/** NUMBER DATATYPE */
console.log(typeof 7); //output-> number
console.log(typeof 90899); //output->number
console.log(typeof 8.9); //output-> number
console.log(typeof -8.9); //output-> number
console.log(typeof -8); //output-> number

/** STRING DATATYPE */
console.log(typeof "hello"); //output-> string
console.log(typeof ""); //output-> string;  THIS IS CALLED AS EMPTY STING
console.log(typeof ``); //output-> sting;   THIS IS ALSO AN EMPTY STRING    (THIS IS KNOWN AS TEMPLATE LITERAL)
console.log(`Hello
my name is chinam dibyadyuti patra`); // BACKTICKS SUPPORTS NEW LINE

// console.log("Hello
// my name is chinam dibyadyuti patra");   // DOUBLE QUOTES AND SINGLE QUOTES DO NOT SUPPORT NEW LINE

/** STRING TO NUMBER */
console.log(typeof "100"); //output-> string
// to convert the string which is in number can be converted into number by just putting '+' plus sign in front of it
console.log(+"100"); //output-> 100
console.log(typeof +"100"); //output-> number
/** when we put plus sign or minus sign (but not work with other mathematical operator sign like '*' or '/') with the string having number then JS implicitly convert the type of string into number */
console.log(-"100"); //output-> -100
console.log(typeof -"100"); //output-> number
// console.log(*"100"); /** ERROR */
console.log(+"-100"); //output-> -100

console.log(+"cdpatra"); //output-> NaN  (NOT A NUMBER)
console.log(typeof +"cdpatra"); //output-> number   NaN IS TYPE OF NUMBER
console.log(+"100a"); //output-> Nan
/** there is an intelligent function known as parseInt() which convert the sting into number */
console.log(parseInt("100abc20")); //output-> 100

/** NUMBER TO STRING */
console.log(100 + ""); //output-> 100
console.log(typeof (100 + "")); //output-> string
console.log("" + 100); //output-> 100
console.log(typeof ("" + 100)); //output-> string
console.log(100 + "abc"); //output-> 100abc; string type
console.log(100 - "abc"); //output-> NaN; number type

/** BOOLEAN DATATYPE */
console.log(typeof true); //output-> boolean
console.log(typeof false); //output-> boolean

/** BOOLEAN TO NUMBER */
console.log(+false); //output-> 0
console.log(typeof +false); //output-> number
console.log(+true); //output-> 1
console.log(typeof +true); //output-> number

/** UNDEFINED DATATYPE */
// UNDEFINED IS A KEYWORD WHICH IS GIVEN TO THE NON INITIALISED VARIABLES
console.log(typeof undefined); //output-> undefined
console.log(+undefined); //output-> NaN
console.log(undefined + ""); //output-> undefined; string type

/** NULL DATATYPE */
// IT IS ALSO LIKE UNDEFINED BUT JS NEVER USE NULL BY ITSELF, IT IS USED BY PROGRAMMERS, JS CAN USE UNDEFINED BY ITSELF
console.log(typeof null); //output-> object;    IT IS BUG OF JS, THE OUTPUT SHOULD BE NULL ONLY
console.log(+null); //output-> 0

/** BIGINT DATATYPE */
console.log(typeof 10n); //output-> bigint
// 'n' SUFFIX IS USED TO REPRESENT BigInt DATATYPE

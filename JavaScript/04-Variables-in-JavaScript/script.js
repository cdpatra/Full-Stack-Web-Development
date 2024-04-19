// !<<================<< <| USING LET KEYWORD |> >>======================>>
let firstName = "Chinam";
let middleName = "Dibyadyuti";
let lastName = "Patra";
let age = 21;
let isHappy = true;
// & let firstName = "hello"; //output-> ERROR    RE DECLARATION OF LET VARIABLE IS NOT ALLOWED

let userIntro =
  "Hi, my name is " + firstName + " " + middleName + " " + lastName + ". I am " + age + " " + "years old.";
console.log(userIntro);

let a; //~ JS implicitly stores undefined if the variable is uninitialized
console.log(typeof a); //output-> undefined

let b = null;
console.log(typeof b); //output-> object

// ^USING CONST KEYWORD
// & if we don't want to change the variable's value and data type once it is initialized we use const variable

const hoursInDay = 24;
// hoursInDay = 18;    //output-> ERROR

//>> const anotherVariable;   //output-> ERROR   'const' declarations must be initialized.

// !<<===========<< <| USING VAR KEYWORD AS WELL AS DIFFERENCE BETWEEN VAR AND LET OR CONST |> >>================>>
var varVariable = "hello";
var varVariable = "world"; //?output-> NO ERROR     RE DECLARATION OF VAR VARIABLE IS ALLOWED
console.log(varVariable);
{
  var anotherVarVariable = 100;
}
console.log(anotherVarVariable); //?output-> 100;     VAR VARIABLE CAN BE ACCESSIBLE OUT OF THE SCOPE ALSO BUT LET AND CONST CANNOT

//&  1. LET AND CONST ARE BLOCK SCOPED AND VAR IS FUNCTIONAL SCOPED

// &/** 2. IF WE CONSOLE.LOG THE VAR VARIABLE BEFORE ITS DECLARATION THEN IT IS NOT ERROR BUT WHEN WE CONSOLE.LOG LET AND CONST VARIABLE BEFORE THEIR DECLARATION THEN IT IS AN ERROR */
console.log(varVariable2); //~output-> undefined
var varVariable2;
// console.log(letVariable);   //~output-> ERROR
// let letVariable;

// &/** The Temporal Dead Zone (TDZ) is a concept in JavaScript that relates to the hoisting of variables and the visibility of variables declared with let and const. In the TDZ, a variable exists but it cannot be accessed until it is declared. This prevents the variable from being used or accessed before a value is assigned to it. */

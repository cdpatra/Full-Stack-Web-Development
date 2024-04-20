// ! <<========================<< <| HOISTING |> >>===============================>>
// *Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).{it is actually the wrong definition of hoisting}
// & JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. (IT IS THE CORRECT DEFINITION)
// ? Hoisting is not a term normatively defined in the ECMAScript specification. (MDN reference)

// ! <|-----------------<< HOISTING IN VARIABLES >>-----------------------|>
// ~ IN CASE OF "var", due to hoisting, if we log the variable before its declaration it is not error and our output will be undefined
console.log(a); //output-> undefined
var a = "cdpatra";
// ~ IN CASE OF "const" AND "let", these variables also get hoisted but JS held them in a zone due to which if we log these variables before their declaration it will give an error, and that zone is called as TEMPORAL DEAL ZONE (TDZ)

// ! <~~ <| TEMPORAL DEAL ZONE |> ~~>
// >>A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the computer initializes it with a value.
// ^A variable is in a TDZ from the start of the block until the code execution reaches the place where the variable is declared and initialized. While inside the TDZ, the variable has not been initialized with a value.
// &If you attempt to access a variable before its complete initialization, JavaScript will throw a ReferenceError. To prevent this, you can access your variables from outside the temporal dead zone.
// *To avoid the temporal dead zone, you can always declare variables before using them.
// ?Temporal dead zone is only applicable for let or const not for var variables.
/**
 * console.log(a); //output-> ERROR
 * const a = 10;
 */

// ! <|--------------------<< HOISTING IN FUNCTIONS >>----------------------|>
hi(); //output-> Hello
function hi() {
  console.log("Hello");
}
// & functions also get hoisted by the JS, as during memory creation phase, function is not initialized with undefined rather it is initialized with function code.

// >> BUT IF WE MAKE FUNCTIONS USING CONST LET OR VAR, IT WOULD NOT BE HOISTED
/**
 * sayHi(); //output-> ERROR
 *
 * const sayHi = function (){
 *  console.log("Hi");
 * }
 */

// ! <|-----------------------<< HOISTING IN CLASSES >>---------------------|>
// ^since internally classes are also function therefore classes are also get hoisted

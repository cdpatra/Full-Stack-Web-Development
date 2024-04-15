 "use strict";  //treat all JS code as newer version
                //there is no way to write "use no strict"
                //now a days there is no need to use this

 // alert("hello") // it will give errow as we are using node.js not browser.

//  console.log(3+3) console.log("Hello") it will give error
 console.log(3+3); console.log("Hello")  //use semicolon to run this, but not write in this way 
                                        // as it reduces the code redability.


//datatypes
let name="Hello"
let age=18 
let isLoggedIn=false

// PRIMITIVE DATATYPES--
// number-> 2 to power 53
// bigint 
// string-> can use "" as well as '' (BUT PREFER DOUBLE QUOTES)
// boolean -> true/false
// null -> it is a standalone value in JS
// undefined -> when we not defined any value to variable.
// symbol -> uniqe (MAJORLY USED IN REACT)


// object

console.log(typeof "hello");
console.log(typeof age);
console.log(typeof null); //output-> object
console.log(typeof undefined); //output-> undefined
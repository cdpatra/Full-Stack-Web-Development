let userEmail = "c@patra.com";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
userEmail = "";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// FALSY VALUES
/** false, 0, -0, BigInt 0n, "", null, undefined, NaN */

// TRUTHY VALUES
/** "0", 'false',"false", " ", [], {}, function(){} */

// CHECKING WHETHER ARRAY IS EMPTY OR NOT
let myArray = [];
if (myArray.length === 0) {
  console.log("Array is empty");
}

// CHECKING WHETHER OBJECT IS EMPTY OR NOT
let myObj = {};
if (Object.keys(myObj).length === 0) {
  console.log("Empty Object");
}

// NULLISH COALESCING OPERATOR (??): null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); //output-> 5;
let val2;
val2 = null ?? 10;
console.log(val2); //output-> 10;
let val3;
val3 = undefined ?? 15;
console.log(val3); //output-> 15;
let val4;
val4 = null ?? 10 ?? 20;
console.log(val4); //output-> 20;

let user1;
console.log(user1 ?? "Guest User"); //output-> Guest User

let user2 = null;
console.log(user2 ?? "Guest User"); //output-> Guest User

let user3 = "cdpatra";
console.log(user3 ?? "Guest User"); //output-> cdpatra

// ternary operator
const iceTeaPrice = 100;
console.log(iceTeaPrice <= 80 ? "Less than 80" : "More than 80"); //output-> More than 80;

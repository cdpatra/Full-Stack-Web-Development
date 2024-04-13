// if

if (true /** condition (expressions) */) {
  // scope
}

// some conditional operators
/** <, >, <=, >=, ==, !=, ===, !== */
if (2 == "2") console.log("executed"); //output-> executed
if (2 === "2") console.log("executed"); //output-> no output
if (2 !== "2") console.log("executed"); //output-> executed

// if else

const temperature = 41;
if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("more than 50");
}

// problem of  var related to scope

const score = 200;
if (score > 100) {
  var power = "fly";
  console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); //here the power is accessible which is not good therefore we do not use var now a days

// Shorthand notations
const balance = 1000;
if (balance > 500) console.log("test"), console.log("test2"); // it is not a good practice

// nested if conditions

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

// real life example

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

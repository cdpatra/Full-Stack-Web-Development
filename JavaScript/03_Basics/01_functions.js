// FUNCTIONS IN JS

function sayMyName() {
  console.log("C");
  console.log("D");
  console.log("P");
  console.log("A");
  console.log("T");
  console.log("R");
  console.log("A");
}

sayMyName; // this is functions's reference
sayMyName(); //this is function's execution

function addTwoNumbers(number1, number2 /** these are parameters */) {
  console.log(number1 + number2);
}
addTwoNumbers(); //output-> NaN
addTwoNumbers(2, 3 /** these are called as arguments */); //output-> 5
addTwoNumbers(3, "4"); //output-> 34
addTwoNumbers(3, "a"); //output->3a
addTwoNumbers(3, null); //output->3

let result = addTwoNumbers(3, 4);
console.log("result: ", result); //output-> result:  undefined

function addTwoNumbers2(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
  console.log("It will not execute");
}
result = addTwoNumbers2(2, 3);
console.log(result); //output-> 5

// different ways for parameters

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("cdpatra")); //output-> cdpatra just logged in
console.log(loginUserMessage()); //output-> Please enter a username;    undefined

// default value
function loginUserMessage2(username = "default user") {
  return `${username} just logged in`;
}
console.log(loginUserMessage2("cdpatra")); //output-> cdpatra just logged in
console.log(loginUserMessage2()); //output-> default user just logged in

// HANDELING MULTIPLE ARGUMENTS
function calculateCartPrice(num1) {
  return num1;
}
console.log(calculateCartPrice(200)); //output-> 200
console.log(calculateCartPrice(200, 300, 400)); //output-> 200
console.log();

function calculateCartPrice2(...num1 /** rest operator */) {
  return num1;
}
console.log(calculateCartPrice2(200, 300, 400)); //output-> [ 200, 300, 400 ] RETURN ARRAY
console.log();

function calculateCartPrice3(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice3(200, 300, 400, 2000)); //output-> [ 400, 2000 ]
console.log();

// FUNCTIONS WITH OBJECTS
const user = {
  unserName: "cdpatra",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user); //output-> Username is undefined and price is 199
handleObject({
  username: "sam",
  prices: 399, //here the key name is prices not price so function will return undefined
});
// output-> Username is sam and price is undefined

// FUNCTIONS WITH ARRAY
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArrray) {
  return getArrray[1];
}
console.log(returnSecondValue(myNewArray)); //output-> 400
console.log(returnSecondValue([300, 499, 100, 200])); //output-> 499

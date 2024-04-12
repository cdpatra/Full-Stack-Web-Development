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
console.log(loginUserMessage2("cdpatra"));  //output-> cdpatra just logged in
console.log(loginUserMessage2());   //output-> default user just logged in

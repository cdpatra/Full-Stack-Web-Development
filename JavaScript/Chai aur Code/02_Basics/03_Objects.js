// There are two ways to declare an object
// 1. like a literal    (when we delcare like a literal then it is not singleton)
// 2. like a constructor    (when we declare like a constructor then is singleton)
// Object.create()    IN THIS WAY WE CAN CREATE OBJECT LIKE A CONSTRUCTOR

// OBJECT LITERALS
const JsUser = {}; //now it is an empty object
const jsUser = {
  name: "cdpatra", //key: value
  // when we declare name: "cdpatra" name (i.e. the key) is treaded as string i.e. "name"
  age: 18,
  location: "Ghaziabad",
  email: "example@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
  myObj: {
    var1: "hello",
    var2: "world",
  },
  "full name": "Chinam-Dibyadyuti-Patra", // this member cannot be called by using the dot operator, this can only be accessed by the square brackets
};

console.log(jsUser.email); // this correct way to access the members of object but there is another better way

// console.log(jsUser[email]);  ERROR AS INTERNALLY MEMBERS ARE REPRESENTED AS STRINGS
console.log(jsUser["email"]); //output-> example@gmail.com

// console.log(jsUser.full name); ERROR CANNOT ACCESS THE full name MEMBER BY USING DOT OPERATOR
// console.log(jsUser."full name");    ERROR

console.log(jsUser["full name"]); //output-> Chinam-Dibyadyuti-Patra
console.log();

// access of key of objects
jsUser.email = "hello@chatgpt.com";
console.log(jsUser);
console.log();

// FUNCTIONS IN OBJECTS
jsUser.greeting = function () {
  console.log("Hello JS user");
};
console.log(jsUser.greeting); //output-> [Function (anonymous)]
console.log(jsUser.greeting()); //output->Hello JS user; undefined
console.log();

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);   // whevever we require to refer the same object we can use this keyword
};
console.log(jsUser.greetingTwo);    //output->[Function (anonymous)]
console.log(jsUser.greetingTwo());    //output-> Hello JS user, cdpatra; undefined
console.log();

Object.freeze(jsUser); //THIS WILL MAKE THE OBJECT NOT TO BE CHANGED FURTHER

jsUser.email = "world@microsoft.com"; //NO ERROR BUT THE OBJECT'S VALUE WILL NOT CHANGE
console.log(jsUser);
console.log();
// *******************************************************************************************************************************
// HOW TO DECLARE Symbol AND MAKE A KEY OF AN OBJECT ? (IMPORTANT FOR INTERVIEWS)

const mySym = Symbol("key1"); // since Symbol is primitive data type therefore it will occupy space in stack memory therefore we do not use new keyword for the declaration

let mySymObj = {
  mySym: "mykey1", // WRONG WAY TO DECLARE SYMBOL IN OBJECT
};

console.log(mySymObj.mySym);
console.log();

console.log("The type of mySym in mySymObj will not be Symbol");
console.log(mySymObj); //output-> { mySym: 'mykey1' }

mySymObj = {
  [mySym]: "mykey1", // correct way to make a Symbol as a key
};

console.log(mySymObj.mySym); //output-> undefined; wrong way to access only way is the square brackets
console.log();

console.log(mySymObj["mySym"]); //output-> undefined; wrong way to access only way is the square brackets
console.log();

console.log(mySymObj[mySym]); // IT IS THE CORRECT WAY TO ACCESS A SYMBOL;
console.log();

console.log("The type of mySym in mySymObj will be Symbol");
console.log(mySymObj); //output-> { [Symbol(key1)]: 'mykey1' }

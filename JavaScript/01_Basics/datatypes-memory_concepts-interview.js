//@JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE AS WE DO NOT REQUIRE TO DECLARE THE TYPE OF THE 
// VARIABLE BEFORE ITS COMPILATION, DURING RUN TIME THE TYPE OF THE VARIABLE CAN BE CHANGED


// #PRIMITIVES

// 7 TYPES : 
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt


//examples
const score = 100;   // datatype-> Number
const scoreValue = 100.3;   //datatype-> Number (THERE IS NOTHING LIKE INT OR FLOAT)

const isLoggedIn = false;   //datatype-> Boolean
const outsideTemp = null;   //datatype-> null
let userEmail;              //datatype-> undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);     //EVENTHOUGH THE VALUES OF id AND anotherId IS SAME BUT 
console.log();                     // DUE TO THE PROPERTY OF SYMBOL THE OUTPUT-> false !!!

const bigNumber = 5324513453453450982304n; //'n' suffix is used to represent BigInt datatype
console.log(typeof bigNumber);
console.log();



// #REFERENCE TYPE (NON PRIMITIVE)
// Array
// Objects
// Functions

//example of Arrays
const heros = ["shaktiman", "naagraj", "doga"];

//example of Objects
{                               //objects are declared by making curly braces
    name: "hello";
    age: 23;
}
let myObj = {                   //objects can be stored in any variable
    name: "hello",
    age: 23,
}

// example of function
const myFunction = function () {    //we can store any function in any variable also
    console.log("hello world");
}


// use of typeof operator
console.log();
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);            //outsideTemp IS ASSIGNED WITH null BUT THE OUTPUT -> Object (IMPORTANT FOR INTERVIEWS)
console.log(typeof id);                     //DATATYPE OF Symbol IS Symbol
console.log(typeof bigNumber);
console.log(typeof heros);                  //DATATYPES OF ALL NON PRIMITIVES DATATYPES RETURNED BY typeof OPERATOR IS Object BUT TECHNICALLY THEIR DATATYPE IS Function
console.log(typeof myObj);
console.log(typeof myFunction);             //DATATYPE OF FUNCTION RETURNED BY typeof OPERATOR IS Function BUT TECHNICALLY IT IS OBJECT FUNCTION
console.log(typeof nonExistedVariable);     //output-> THE VARIABLE IS NOT EXISTED THEREFORE typeof WILL RETURN undefined


// link to learn more about datatypes:- https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++ Memory Concepts +++++++++++++++++++++++++++

// there are two types of memories

//1. Stack Memory (PRIMITIVE TYPES) -> Whenever stack memory is used, we get the copy of the variable
//2. Heap Memory  (NON-PRIMITIVE TYPES) -> Whenever heap memory is used, we get the reference of the original variable


//example to understand this concepts
let myName = "ChinamDibyadyutiPatra";

let anotherName = myName;     //Here, only the copy of myName is passed not the reference so any changes made in this variable 
//will not affect the original variable i.e. myName
anotherName = "Hello world";

console.log();
console.log(myName);
console.log(anotherName);

//let's take example of some advance datatype
let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;      //Here, the reference of userOne is assigned to userTwo;!!!
//SO ANY CHANGES MADE IN userTwo WILL ALSO GET REFLECTED IN userOne VARIABLE !!!
userTwo.email = "email@changed.com";
console.log(userOne.email);     //original object's value got changed !!!
console.log(userTwo.email);
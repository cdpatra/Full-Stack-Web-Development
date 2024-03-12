let score = 33;

console.log(typeof score);
console.log(typeof (score));


// if score is a string
score = "33"
console.log(typeof score)

let valueInNumber = Number(score)   //Number is a class therefore the starting letter is capital

console.log(typeof valueInNumber)   //output-> number
console.log();


// now if score="33abc", then what will the output of typeof after conversion into Number
score = "33abc"
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //output-> number BUT WHY?
console.log();

// LET'S TRY TO PRINT THE VALUE OF valueInNumber VARIABLE!!!
console.log(valueInNumber);     //output-> NaN !!!
console.log();

// SO DO NOT RELY ON NUMBER IN JAVASCRIPT AS typeof NaN IS SHOWN AS Number (NaN MEANS NOT A NUMBER BUT ITS TYPE IS Number)!!!



// if score is a null
score = null;
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //output-> 0;
console.log();



// if score is undifined
score = undefined;
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);     //output-> NaN
console.log();



// if score is any boolean value
score = true;
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)  //output-> 1;
console.log();




//FINAL CONCLUSIONS FOR Number TYPE CONVERSION
// "33" -> 33
// "33abc"-> NaN
// true-> 1; false-> 0



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     //output-> true;
console.log();


// if isLoggedIn is any empty string
isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     //output-> false
console.log();


// if isLoggedIn is any non empty string
isLoggedIn = "Hello";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     //output-> true;
console.log();




//FINAL CONCLUSIONS FOR Boolean TYPE CONVERSION
// 1-> true; 0-> false
//""-> false
//"Hello"-> true




//let's try String type conversion
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);          //output-> 33 (BUT IT'S A STRING)
console.log(typeof stringNumber);   // output-> string;
console.log();
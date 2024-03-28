//#NUMBERS

const score = 400;
console.log(score);     //output-> 400

const balance = new Number(100);
console.log(balance);   //output-> [Number: 100]
console.log();

//some methods of Number

//toString()
console.log(`using toString method:- ${balance.toString()}`);     //output-> 100 (BUT IT IS ACTUALLY A STRING,
// THERFORE WE CAN APPLY VARIOUS STRING METHODS ON IT !!!)
console.log(`using lenth method on Numbers by converting Number to string:- ${balance.toString().length}`);
console.log();

//toFixed()
console.log(`using toFixed method to fix the precision after the floating point:- ${balance.toFixed(2)}`);
console.log();

//toPrecision()
const otherNumber = 123.8966;
console.log(`output of toPrecison(4): ${otherNumber.toPrecision(4)}`);
console.log(`output of toPrecison(3): ${otherNumber.toPrecision(3)}`);
console.log(`output of toPrecison(2): ${otherNumber.toPrecision(2)}`);
console.log();

//toLocaleString()
const hundreds = 1000000;
console.log(`using toLocaleString() to add commans according to number system: ${hundreds.toLocaleString()}`);                  //output-> 1,000,000
console.log(`using toLocaleString('en-IN') to add commans according to number system: ${hundreds.toLocaleString("en-IN")}`);    //output-> 10,00,000


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log();
console.log(Math);

// some methods of Math

// abs()
console.log(`The value of abs(-4) is: ${Math.abs(-4)}`);
console.log();

//round()
console.log(`The value of round(4.3) is: ${Math.round(4.3)}`); //outupt-> 4
console.log(`The value of round(4.6) is: ${Math.round(4.6)}`);  //output-> 5
console.log();
//ceil() and floor()
console.log(`The ceiling value of 4.3 is: ${Math.ceil(4.3)}`);  //output-> 5
console.log(`The floor value of 4.3 is: ${Math.floor(4.3)}`)    //output-> 4
console.log();

//min() and max()
console.log(`The maximum value among (1,5,7,2,4) is: ${Math.max(1, 5, 7, 2, 4)}`);    //output-> 7
console.log(`The mininum value among (1,5,7,2,4) is: ${Math.min(1, 5, 7, 2, 4)}`);    //output-> 1
console.log();

//random()
console.log(`random() generates random values between 0-1 : ${Math.random()}`);
console.log(`To generate random values between 0-10 we multiply it by 10 : ${Math.random() * 10}`);
console.log(`To avoid the case of 0 we add 1 : ${(Math.random() * 10) + 1}`);
console.log();
// IMPORTANT FORMULA FOR RANDOM
const min = 10;
const max = 20;
console.log(`Random numbers between 20-10: ${Math.floor((Math.random() * (max - min + 1) + min))}`);
console.log();

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


//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
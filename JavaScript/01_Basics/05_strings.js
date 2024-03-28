const name = "cdpatra ";
const repoCount = 50;

console.log(name + repoCount + " Value");   //this syntax is OUTDATED !!!
console.log(`Hello my n ame is ${name} and my repo count is ${repoCount}`);
// The above method is the modern way to deal with strings,
// THIS METHOD IS CALLED AS STRING INTERPOLATION;
console.log();


//another method for the declaration of String
const gameName = new String('cd-patra');

//some methods of String datatype
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(`length of the string:- ${gameName.length}`);
console.log(`converting to upper case:- ${gameName.toUpperCase()}`);
console.log(`character at index 2:- ${gameName.charAt(2)}`);
console.log(`index of character 'd':- ${gameName.indexOf('d')}`);
console.log();

let newString = gameName.substring(0, 4);
console.log(`output of substring(0,4):- ${newString}`);
newString = gameName.substring(-8, 4);      //substring METHOD IGNORES THE -VE VALUES
console.log(`output of substring(-8,4):- ${newString}`);
console.log();

let anotherString = gameName.slice(0, 4);
console.log(`output of sclice(0,4):- ${anotherString}`);
anotherString = gameName.slice(-8, 4);         //WE CAN USE -VE VALUES IN slice METHOD
console.log(`output of sclice(-8,4):- ${anotherString}`);
console.log();


//some most used String methods

//trim
const newStringOne = "    cdpatra     ";
console.log(`without using trim function:- ${newStringOne}`);
console.log(`with using trim function:- ${newStringOne.trim()}`);
console.log();

//replace
const url = "https://google.com/cd%20patra";
console.log(url.replace('%20', '_'));
console.log();

//includes
console.log(`does url contains 'cd':- ${url.includes('cd')}`);
console.log(`does url contains 'cdp':- ${url.includes('cdp')}`);
console.log();

//split
const newName = "chinam-dibyadyuti-patra";
console.log("splitting the string based on '-':-", newName.split('-'));     //output-> [ 'chinam', 'dibyadyuti', 'patra' ]
console.log(`splitting the string based on '-':- ${newName.split('-')}`);   //output-> chinam,dibyadyuti,patra

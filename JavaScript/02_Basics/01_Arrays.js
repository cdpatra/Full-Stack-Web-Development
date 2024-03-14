// array

// JavaScript arrays are RESIZABLE and 
// and can contain a MIX OF DATATYPES

const myArr = [1, 2, 3, 4, 5];
//some other methods for declaring array
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);
console.log(myArr["one"])   //output-> undefined
console.log();

//JS arrays are not associative arrays and so,
// array elements cannot be accessed using arbitrary strings as indexes, but 
// must be accessed using nonnegative integers as indexes

// JS ARRAY-COPY OPERATIONS CREATE SHALLOW COPIES !!!!!!! (INTERVIEW)

//Array methods

//push()
myArr.push(6);
console.log("Array after pushing 6", myArr);  //output-> [ 1, 2, 3, 4, 5, 6 ]
//pop()
myArr.pop();
console.log("Array after pop", myArr);      //output-> [ 1, 2, 3, 4, 5 ]
console.log();

//unshift()     opposite in direction to push()
myArr.unshift(9);
console.log("Array after using unshift(9):", myArr);    //output-> [ 9, 1, 2, 3, 4, 5 ]
//shift()       opposite in direction to pop()
myArr.shift();
console.log("Array after using shift():", myArr);    //output-> [ 1, 2, 3, 4, 5 ]
console.log();

//includes()       it returns boolean values
console.log(`Is array includes element 9: ${myArr.includes(9)}`);
//indexOf()
console.log(`At which index element 4 is present in array: ${myArr.indexOf(4)}`);
console.log(`At which index element 100 is present in array: ${myArr.indexOf(100)}`);
console.log();

//join()
const newArr = myArr.join();
console.log(myArr);     //original array
console.log(newArr);    //join() convert the original array into string data type
console.log(`Data type of newArr after using join() is: ${typeof newArr}`);     //output-> String
console.log();

//slice, splice
console.log("original array:", myArr);       //output-> [ 1, 2, 3, 4, 5 ]
const myNewArray1 = myArr.slice(1, 3);      
console.log("Array after using slice(1,3):", myNewArray1);       //output-> Array afte using slice(1,3): [ 2, 3 ]
console.log("original array after using slice(1,3):", myArr);       //ORIGINAL ARRAY DID NOT CHANGE DUE TO SLICE !!!!
console.log();

const myNewArray2 = myArr.splice(1,3);
console.log("Array afte using splice(1,3):", myNewArray2);       //output-> [ 2, 3, 4 ]
console.log("original array after using splice(1,3):", myArr);       //ORIGINAL ARRAY CHANGED DUE TO SPLICE !!!!, output->[ 1, 5 ]
console.log();

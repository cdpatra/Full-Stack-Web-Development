// ! <<======================< <| SHALLOW COPY |> >=============================>>

const fruits = ["Mango", "Apple", "Orange"];
const myFruits = fruits;

myFruits.push("Dates");
myFruits.push("Grapes");

console.log(myFruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']
console.log(fruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']

// & <~~ WE MAKE CHANGES IN myFruits THEN WHY fruits GET CHANGED ? ~~>
// * ANSWER:- it happens with the arrays as well as with the objects, as we are assigning the address which is point by fruits to myFruits variable, so any changes in the memory location will be reflected by both the variables as both of them are pointing to the same memory location.
console.log(myFruits === fruits); //output-> true

const user1 = {
  firstName: "Brandon",
  lastName: "Simon",
};
let user2 = user1;
user2.lastName = "Page";

console.log(user1); //output-> {firstName: 'Brandon', lastName: 'Page'}
console.log(user2); //output-> {firstName: 'Brandon', lastName: 'Page'}
console.log(user1 === user2); //output-> true

const username1 = "cdpatra";
let username2 = username1; //?Here, username2 will point to the same memory location to which the username1 is pointing
username2 = "chinam" + username2; //?Here, username2 will point to the different memory location, as new string will be created

// ! <<================< <| CORRECT WAY OF COPYING ARRAY OR OBJECTS OR NON-PRIMITIVE DATATYPES |> >================>>

user2 = {}; //first we create an empty object
Object.assign(user2, user1); //?THIS METHOD OF OBJECT IS USED FOR THE DEEP COPY (BUT THIS METHOD IS NOT IN USE NOW A DAYS)
user2.lastName = "Riley";
console.log(user1); //output-> {firstName: 'Brandon', lastName: 'Page'}
console.log(user2); //output-> {firstName: 'Brandon', lastName: 'Riley'}
console.log(user1 === user2); //output-> false
//>> <~~ ANOTHER WAY FOR DEEP COPY ~~>
const user3 = { ...user1 }; // BY USING SPREAD OPERATOR
console.log(user3); //output-> {firstName: 'Brandon', lastName: 'Page'}
console.log(user1 === user3); //output-> false

//>> LETS DO WITH ARRAYS ALSO

let myNewFruits = [...fruits];
console.log(myNewFruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']
console.log(fruits === myNewFruits); //output-> false
myNewFruits.push("Orange", "Papaya");
console.log(myNewFruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes', 'Orange', 'Papaya']
console.log(fruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']

// * here we can also use Object.assign(myNewFruits,fruits) THIS METHOD CAN WORK WITH ARRAY AS ARRAY IS NON-PRIMITIVE DATA TYPE AND NON-PRIMITIVE DATA TYPES ARE NOTHING BUT OBJECTS

myNewFruits = [];
Object.assign(myNewFruits, fruits);
console.log(myNewFruits === fruits); //output-> false;
myNewFruits.push("Orange", "Papaya");
console.log(myNewFruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes', 'Orange', 'Papaya']
console.log(fruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']

// >> <~~ ANOTHER METHOD IS BY USING CONCAT METHOD ~~>
myNewFruits = [].concat(fruits);
console.log(myNewFruits === fruits); //output-> false;
myNewFruits.push("Orange", "Papaya");
console.log(myNewFruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes', 'Orange', 'Papaya']
console.log(fruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']

// >> <~~ ANOTHER METHOD IS BY USING SLICE METHOD ~~>
myNewFruits = fruits.slice();
console.log(myNewFruits === fruits); //output-> false;
myNewFruits.push("Orange", "Papaya");
console.log(myNewFruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes', 'Orange', 'Papaya']
console.log(fruits); //output-> ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']

// ! <<=======================<< <| DEALING WITH NESTED OBJECTS |> >>========================>>

const user_1 = {
  firstName: "Guernsey",
  lastName: "Chandler",
  address: {
    city: "Delhi",
    pinCode: 898428,
  },
  subject: ["Physics", "CS", "Maths"],
};
const user_2 = { ...user_1 };
user_2.firstName = "Dylan";
console.log(user_1);
/**output-> {
  firstName: 'Guernsey',
  lastName: 'Chandler',
  address: { city: 'Delhi', pinCode: 898428 },
  subject: [ 'Physics', 'CS', 'Maths' ]
} */
console.log(user_2);
/**output-> {
  firstName: 'Dylan',
  lastName: 'Chandler',
  address: { city: 'Delhi', pinCode: 898428 },
  subject: [ 'Physics', 'CS', 'Maths' ]
} */

// >> <~~ NOW LETS CHANGE THE NESTED OBJECTS ~~>
user_1.address.city = "Mumbai";
user_1.subject.push("Chemistry");
console.log(user_1);
/**output->{
  firstName: 'Guernsey',
  lastName: 'Chandler',
  address: { city: 'Mumbai', pinCode: 898428 },
  subject: [ 'Physics', 'CS', 'Maths', 'Chemistry' ]
}
 */
console.log(user_2);
/** output->{
  firstName: 'Dylan',
  lastName: 'Chandler',
  address: { city: 'Mumbai', pinCode: 898428 },
  subject: [ 'Physics', 'CS', 'Maths', 'Chemistry' ]
} */
// ~ HERE WE CAN OBSERVE THAT THE city OF BOTH THE OBJECTS I.E. user_1 AND user_2 CHANGED SIMULTANEOUSLY
// ^ THIS IS BECAUSE THE KEY I.E. address OF BOTH THE OBJECT IS POINTING TO THE SAME MEMORY LOCATION

// & SINCE SPREAD OPERATOR METHOD IS APPLICABLE FOR SINGLE LEVEL COPYING OF OBJECTS, IT IS NOT APPLICABLE FOR NESTED OBJECTS THEREFORE IT IS CALLED AS SHALLOW COPY, so all the method discussed above are methods for shallow copy

// ! <~-~-~-~-~-~- DEEP COPY :- It is not easy to do DEEP Copy, we have to used JSON to do DEEP Copy ~-~-~-~-~-~-~-~>

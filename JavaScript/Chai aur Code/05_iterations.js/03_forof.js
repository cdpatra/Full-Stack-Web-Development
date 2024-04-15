// all the following loops are array specific loops
/** ["", "", ""]    array of strings */
/** [{}, {}, {}]    array of objects (most common in web dev) */

// for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

for (const key of map) {
  console.log(key);
}
/** output->
[ 'IN', 'India' ]
[ 'USA', 'United State of America' ]
[ 'Fr', 'France' ]
*/
for (const [key,value,] /** in this way we can destructure array as each element is an array */ of map) {
  console.log(key, ":-", value);
}

/**output->
 IN :- India
 USA :- United State of America
 Fr :- France
 */

// for of loop for Objects

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);
// }
/** TypeError: myObject is not iterable */

// for (const key of myObject) {
//   console.log(key);
// }
/** TypeError: myObject is not iterable */

// IT IS NOT THE WAY TO ITERATE OVER OBJECTS TO THIS WE USE for in LOOP

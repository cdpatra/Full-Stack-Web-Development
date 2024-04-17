const username = prompt(`Please enter your name.`) || "Guest User";
// const userAge = +prompt(`Please enter your age.`); // here, I have added + sign to convert the string input into number
const userAge = parseInt(prompt(`Please enter your age.`)) || 0; //here, I have used or operator because if user cancel the prompt the prompt will return null and parseInt will convert null into NaN so to to make NaN into 0 this is the logic.

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge > 0 && userAge <= 4) {
  console.log(`${username} is a kid.`);
  console.log(`and he/she is playing.`);
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${username} is a school going student.`);
  console.log(`and he/she is learning maths and science.`);
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${username} is a college going student.`);
  console.log(`and he/she is learning computer science.`);
  if (userAge >= 20) {      //nested if-else
    console.log(`He/She is above 19`);
  } else {
    console.log(`He/She is below 20`);
  }
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${username} is working professional`);
  console.log(`and he/she is a web-developer`);
} else if (userAge > 45 && userAge <= 120) {
  console.log(`${username} is retired.`);
  console.log(`and he/she reads newspaper`);
} else if (userAge > 120) {
  console.log(`${username} is immortal`);
} else {
  console.log(`Please enter a valid age`);
}

console.log("Program ended");

/** if can also take truthy and falsy values in place of its condition
 * Truthy values will be considered as true
 * Falsy values will be considered as false
 */

if ({}) console.log("Hello Truthy"); //output-> hello;  AS {} EMPTY OBJECT IS TRUTHY VALUE
if (undefined) console.log("Hello Falsy"); //output-> NO OUTPUT BECAUSE UNDEFINED IS FALSY VALUE

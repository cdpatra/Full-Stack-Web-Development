// ! <<======================<< ES6 FEATURES OF JAVASCRIPT >>==================>>

// ! <|----------<< Default Parameters >>------------|>
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5)); //output-> NaN
// >> to handle this case we can use default parameters
function multiplyWithDefaultParameters(a, b = 1) {
  return a * b;
}
console.log(multiplyWithDefaultParameters(2)); //output-> 2
// & default parameter only replace the undefined parameters
console.log(multiplyWithDefaultParameters(2, undefined)); //output-> 2
console.log(multiplyWithDefaultParameters(2, null)); //output-> 0
console.log(multiplyWithDefaultParameters(2, "")); //output-> 0

function rollADie(numberOfSides = 6) {
  return Math.floor(Math.random() * numberOfSides) + 1;
}

// ! <|------------<< SPREAD OPERATOR >>------------|>
const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];
const myName = "cdpatra";
const joinedArray = numbers1.concat(numbers2);
const spreadArray = [...numbers1, ...numbers2, ...myName];
console.log(spreadArray); //output-> [1, 2, 3, 4, 5, 6, 7, 8, 'c', 'd', 'p', 'a', 't', 'r', 'a']

const user = {
  name: "cdpatra",
  age: 21,
};
const updatedUser = { ...user, city: "Burundi" };
console.log(updatedUser); //output-> { name: 'cdpatra', age: 21, city: 'Burundi' }

console.log(sum(...numbers1, ...numbers2));
function sum() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
}

// ! <|--------------<< REST PARAMS / PARAMETERS >>-------------|>

console.log(add(...joinedArray)); //output-> 36
function add(a, b, ...numbers) {
  //~ here, a,b will get the first and the second elements of the joinedArray respectively and the rest elements will be passed in numbers, therefor it is called as rest parameters
  //& rest parameters must be last formal parameter
  //* if rest parameter did not get any element then it will not be undefined, rather it will be empty array

  return a + b + numbers.reduce((acc, curr) => acc + curr);
}

// ! <|--------------------<< Destructuring in JavaScript >>--------->>
const colors = ["red", "green", "yellow", "pink", "black", "white"];
/**
 * const color1 = colors[0];
 * const color2 = colors[1];
 * const color3 = colors[2];
 */
const [color1, color2, color3] = colors; //? destructuring of array elements
console.log(color1); //output-> red
console.log(color2); //output-> green
console.log(color3); //output-> yellow

const [, , , color4] = colors;
console.log(color4); //output-> pink

// ^ using destructuring on objects,
const userDetails = {
  name: "cdpatra",
  age: 21,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};
// ~ in case of objects we have to write the variable name same as the key name of the object otherwise it would not give error but he value will be undefined
const { name, job } = userDetails;
console.log(name); //output-> cdpatra
console.log(job); //output-> undefined

// >> if you want to give some other name to the variable for a particular key of the object the follow the following syntax
const { name: username, age, job: userJob } = userDetails;
console.log(username); //output-> cdpatra
console.log(age); //output-> 21
console.log(userJob); //output-> undefined

// & multilevel destructuring
const { address } = userDetails;
console.log(address); //output-> {city: 'Bangalore', state: 'Karnataka'}
const {
  address: { city },
} = userDetails;
console.log(city); //output-> Bangalore

// ? we can also destructure array as an object as internally array is an object
const { 4: color5 } = colors;
console.log(color5); //output-> black

// ^ using destructuring on functions
function intro({ age, name: username }) {
  console.log(age, username);
}
intro(user); //output-> 21 'cdpatra'
function printColors([firstColor, secondColor, , forthColor], { 2: thirdColor }) {
  console.log([firstColor, secondColor, thirdColor, forthColor]);
}
printColors(colors, colors); //output->  ['red', 'green', 'yellow', 'pink']

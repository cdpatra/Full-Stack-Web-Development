const fruits = ["banana", "apple", "peach", "mango", "grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ! <<==========<< <| FOR OF LOOP |> >>==============>>
for (const fruit of fruits) {
  //*  here const keyword is working because on every iteration a new const variable is created and next element of array is assigned to it, therefore we can use const keyword in for-of loop, but cannot use const keyword in traditional for loop
  console.log(fruit);
}

// & for of-loop is applicable only for iterable objects
username = "cdpatra";
for (let letter of username) {
  console.log(letter);
}

// & we cannot use for-of loop on objects (OBJECTS ARE NOT ITERABLE)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "Blue",
  city: "Bangalore",
};
/* for (let letter of person) { //* error
  console.log(letter);
} */
// ! <<============<< <| FOR IN LOOP |> >>===========>>
// * for-in loop is used specifically for objects
for (const key in person) {
  console.log(key, ": ", person[key]); // >> here if we use dot notation to access the key then it will give undefined in this case as it will try to access key of the object named 'key' (as typeof key is string) which is not present in the object, so in for-in loop we should use the bracket notation to access the key-value pair.
  console.log(typeof key); //output-> string
}
// ? but for-in loop is not so efficient so therefore we generally avoid it, rather we use another way to iterate over loop by using Objects.keys() and Object.values(),Object.entries()

const personKeys = Object.keys(person);
console.log(personKeys); //output-> ['firstName', 'lastName', 'age', 'eyeColor', 'city']

for (let key of personKeys) {
  console.log(key, ": ", person[key]);
}

const personValues = Object.values(person);
console.log(personValues); //output-> ['John', 'Doe', 50, 'Blue', 'Bangalore']
const personEntries = Object.entries(person);
console.log(personEntries);
/**[
  [ 'firstName', 'John' ],
  [ 'lastName', 'Doe' ],
  [ 'age', 50 ],
  [ 'eyeColor', 'Blue' ],
  [ 'city', 'Bangalore' ]
] */

// ! <<=============<< <| FOR EACH LOOP |> >>=============>>
// * forEach is not any loop, rather its an Array method (FOREACH IS A HIGHER ORDER FUNCTION)
fruits.forEach(function () {
  console.log("Hi"); //>> forEach method will run for "n" number of times where "n" is the length of the array
});

// ^ to print the values of the array we have to pass any argument into the callback function
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// ? by using arrow function expression
fruits.forEach((fruit) => console.log(fruit));

// ? by using external function
function myFun(ele) {
  console.log(ele);
}
fruits.forEach(myFun);
// & forEach function does not return any thing even though you try to return via callback function the return value of forEach will be undefined

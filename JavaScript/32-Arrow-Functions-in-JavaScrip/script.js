// ! <<================<< <| ARROW FUNCTIONS EXPRESSION IN JAVASCRIPT |> >>================>>

// ~ Function declaration
function square1(num) {
  return num * num;
}

// ~ Function Expression
const square2 = function (num) {
  return num * num;
};

// ~ Arrow function expression
const square3 = (num) => {
  return num * num;
};
const square4 = (num) => num * num; //* if there is only one line in the function definition we can simply return the expression in this way without writing return keyword (THIS IS ALSO CALLED AS IMPLICIT RETURN)
// >> bracket at argument field is optional if there is only one argument

// ? if we want to return an object then we have to use parenthesis in case of implicit return
const myObj1 = () => {}; //>> wrong way
console.log(typeof myObj1()); // output->undefined
const myObj2 = () => ({}); //>> right way
console.log(typeof myObj2()); //output->object

// & arrow function is most commonly used as callback function, for example we can pass arrow function in setTimeout() or setInterval() also
setTimeout(() => {
  console.log("Hello");
}, 2000);

const random = () => Math.floor(Math.random() * 10);

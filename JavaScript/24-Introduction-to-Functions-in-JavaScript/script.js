// ! <<=============<< <| INTRODUCTION TO FUNCTION |> >>================>>

//^ here, it is function definition and can called as function declaration but it is not function expression
function introduceMe(username = "Guest User" /**default parameter */, profession, age) {
  console.log("Hi, ");
  console.log(`My name is ${username}."`);
  console.log(`I am a ${profession || "Default Profession"}.`);
  console.log(`My age is ${age || "Default Age"} years`);
  console.log(typeof username); //output-> string
  console.log(typeof profession); //output-> string
  console.log(typeof age); //output-> number
}
// ^ function call
introduceMe("Rosalie", "Software Engineer", 23, "extra argument"); /** <~~ arguments */
//~ extra arguments are ignored by the function
introduceMe("Gene", "Mechanical Engineer", 24);
introduceMe();

// ! <<====================<< <| RETURN KEYWORD IN JAVASCRIPT |> >>===================>>
function addTwoNumbers(num1, num2) {
  return num1 + num2;

  //   * if function does not return (explicitly) anything then function will return undefined (implicitly)
}
let result = addTwoNumbers();
console.log(result); //output-> NaN
result = addTwoNumbers(5, 6);
console.log(result); // output-> 11
console.log(addTwoNumbers(addTwoNumbers(4, 6), addTwoNumbers(8, 12))); //output-> 30

// ! <<================<< <| FUNCTION EXPRESSION |> >>====================>>
// ^here, it is function definition and can called as function expression but it is not function declaration
// & basically we can define function in 2 ways, one is function declaration and another one is function declaration.
const funExpression = function () /** ANONYMOUS FUNCTION*/ {
  console.log("This is function expression");
};
funExpression(); //output-> This is function expression

const funExp = function funName() {
  //* here if we write the function name then it will not be ignored by the JS engine even if we try to call the function with that name then it will give error
  console.log("Hello");
};
// funName(); // output-> ERROR

// ! <|-----------||WHAT WILL HAPPEN IF WE DEFINE THE SAME FUNCTION TWO TIMES ||---------------|>
function myFun() {
  console.log("Hello");
}
function myFun() {
  console.log("World");
}
myFun(); //output-> World
// >> yes we can define function with same name but the definition which is written last will be applicable

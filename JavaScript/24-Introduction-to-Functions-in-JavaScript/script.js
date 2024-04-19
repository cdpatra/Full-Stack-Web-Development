// ! <<=============<< <| INTRODUCTION TO FUNCTION |> >>================>>

//^ function definition */
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

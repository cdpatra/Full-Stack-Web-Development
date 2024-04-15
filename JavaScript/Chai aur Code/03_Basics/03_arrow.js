const user = {
  userName: "cdpatra",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
    console.log(this);
  },
  // this is used to refer the current context
};
user.welcomeMessage();
user.userName = "sam";
user.welcomeMessage();

console.log(this); //output-> {}
// BUT WHEN WE EXECUTE THE ABOVE STATEMENT IN BROWSER THEN WE GET window OBJECT AS AN OUTPUT;

function one() {
  const userName = "cdpatra";
  console.log(this); //output->
  console.log(this.userName); //output-> udefined
}
one();

const chai = function () {
  let userName = "cdpatra";
  console.log(this.userName); //output-> undefined
};
chai();

// arrow function

const arrow = () => {
  let userName = "cdpatra";
  console.log(this); //output-> {}
  console.log(this.userName); // output-> undefined
};
arrow();

var addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 5));  //output-> 8

// implicit return

var addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(2,3));   //output-> 5

// when we return object implicity using arrow function
var returnObject = () => {userName: "cdpatra"};
console.log(returnObject());    //output-> undefined
var returnObject = () => ({userName: "cdpatra"});   /** should use parenthesis */
console.log(returnObject());    //output-> { userName: 'cdpatra'}
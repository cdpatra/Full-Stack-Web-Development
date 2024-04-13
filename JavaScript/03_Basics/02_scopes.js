// SCOPES

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);  ERROR
// console.log(b);  ERROR
console.log(c); //output-> 30; 'c' is not in the global scope it is present in the local scope of if statement but can be accessible outside its scope

let a = 300;
var d = 500;
if (true) {
  var d = 30;
  let a = 40;
}

console.log(d); //output-> 30    it is problematic
console.log(a); //output-> 300

// THE SCOPE IN THE CONSOLE WHICH IS PRESENT IN THE BROWSER IS DIFFERENT AND THE SCOPE IN THE CODE ENVIRONMENT IS DIFFERENT (IMPORTANT FOR INTERVIEW)

// NESTED SCOPE

function one() {
  const userName = "cdpatra";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  //   console.log(website);  ERROR

  two();
}
one();

if (true) {
  const userName = "cdpatra";
  if (userName === "cdpatra") {
    const website = "youtube";
    console.log(userName + " " + website);
  }
  //   console.log(website);  ERROR
}
// console.log(userName);   ERROR

// ************************* Intresting Example *************************
//  HOISTING

console.log(addone(5)); // work normally
function addone(num) {
  // this declaration is for function
  return num + 1;
}

// console.log(addTwo(5));  THIS IS ERROR AS WHEN WE DECLARE FUNCTION LIKE EXPRESSION i.e. IN VARAIBLE THEN WE CANNOT CALL IT BEFORE ITS DECALRATION
const addTwo = function (num) {
  // this declaration is also for function but it is sometime also called as expression
  return num + 2;
};
console.log(addTwo(5)); // work fine; output-> 7

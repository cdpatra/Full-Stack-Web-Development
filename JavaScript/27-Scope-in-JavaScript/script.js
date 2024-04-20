// ! <<===================<< <| SCOPE IN JAVASCRIPT |> >>=========================>>
const username = "cdpatra";
const userAge = 25;

function add() {
  const x = 5;
  const y = 8;
  console.log(x + y);
  console.log(username);
}
add();
function subtract() {
  const username = "chinam";
  const x = 15;
  const y = 18;
  console.log(x - y);
  console.log(username);
}
subtract();

// ! <|------------------<< <| DIFFERENCE BETWEEN GLOBAL SCOPE AND SCRIPT SCOPE |> >>---------------------|>
// * when we declare any variable using let and const it goes into script scope, and functions and variables declared with var keyword goes into window object.
// >> Both global scope and script scope variables are accessible throughout the program but we can assess var variables by using window object, but we cannot access let and const object using window object
var a = 50;
console.log(window.a); //output-> 50
console.log(window.add()); //output-> 13

console.log(window.username); //output-> undefined
console.log(window.userAge); //output-> undefined
// & we are getting undefined with username and userAge because whenever we try to access any property of object which is not present in the object then it returns undefined, since let and const variables are present in script scope not in window object therefore we are getting undefined as our output.

// ! <<===========<< <| LEXICAL(static) AND BLOCK SCOPE AND CLOSURE SCOPE AND LOCAL/FUNCTIONAL SCOPE|> >>==========>>
// ^ lexical scope means the number of scopes the element has access, it include its all parent scopes upto global scope
function parent() {
  const username = "chinam";
  const x = 15;
  const y = 18;
  const z = 28;
  console.log(x - y);
  console.log(username);

  function child() {
    const childName = "Golu";
    console.log(childName);
    console.log(z); //? CLOSURE SCOPE (as we are using variable of parent scope)

    {
      //? BLOCK SCOPE
      const num1 = 78; //& let and const are block scope
      let num2 = 79;
      var num3 = 80; //~ var variables are accessible out of this block(but till child's functional/local scope) but it will present in this block scope only, to very you can see in dev tools
      console.log(num1);
      console.log(num2);

      num4 = 81; //^ we can declare variable like this also, and this can be accessible
    }
    // console.log(num1); ERROR
    // console.log(num2); ERROR
    console.log(num3);

    function grandChild() {
      const grandChildName = "Molu";
      console.log(grandChildName);
    }
    grandChild();
  }
  child();
  //   console.log(num3); //& here, num3 is variable made from var keyword, var variables are functional/local scoped, they can only be accessed within the functional scope,no matter how much nested block are there, it can only be accessed within functional/local scope
  console.log(num4); //^ here, this num4 variable is made without using let,const and var keyword, therefore it automatically became the property of window object, we can even call num4 with the help of window object (window.num4) SO TO PREVENT THIS PROBLEM THERE IS A FEATURE OF JS I.E. "use strict"
}
parent();

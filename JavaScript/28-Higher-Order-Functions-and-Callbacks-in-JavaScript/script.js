// !<<====================<< <| HIGHER ORDER FUNCTIONS >>======================>>

function myFun(b) {
  console.log(b);
}
myFun("hi");
myFun({ username: "cdpatra", userAge: 21 });
myFun([1, 2, 3, 4, 5]);

console.log(typeof myFun); //output-> function //& the typeof function is shown function but in JS function is not and data type, internally function is object, therefore the type of function should be object, but it not shown by the JS !!!

// * to prove that function is an object we have to use console.dir() method, this console.dir() method show the function in the form of object
console.log(myFun); /** output-> ƒ myFun(b) {
  console.log(b);
} */
console.dir(myFun); //output-> ƒ myFun(b) //? in prototype section you can see that function is an object behind the scenes
console.dir("randomString"); //output-> randomString //? here, in primitive data type it will not show in the form of object
// >> another way to prove that function is an object is that whenever we want to add any new property to an object we use dot operator and to access that new property we again use dot operator.
myFun.newProperty = 5; //? here 'myFun' is the function and by using dot operator we can add new property
console.log(myFun.newProperty); //output-> 5

// !<|-----------------<< <| PASSING A FUNCTION IN A FUNCTION |> >>-------------------------|>
function a(b) {
  console.dir(b);
  b();
}

function sayHi() {
  console.log("Hiiiiiiiiiiiiiii");
}
a(sayHi);
// & since we have passed a function in a function therefore 'a' is not a higher order function
// a('Hello'); //~ it will give error as 'a' is now a higher order function it require a function as its parameter

a(function () {
  //? we can pass an anonymous function
  console.log("HIIIIIIIIIIII");
});

// ! <|--------------<< CALLBACK FUNCTION >>--------------|>
// * callback function is nothing but the function as an argument that is used to be passed in a higher order function, in our example the anonymous function and the 'sayHi' function are callback functions, and the function who is accepting the callback function is called as higher order function
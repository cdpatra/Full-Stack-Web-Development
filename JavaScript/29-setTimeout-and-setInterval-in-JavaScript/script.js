// ! <<==============<< <| SETTIMEOUT |> >>========================>>
// ^ THIS SETTIMEOUT IS NOT THE PART OF JAVASCRIPT IT IS THE PART OF BROWSER (IT WOULD BE MORE UNDERSTANDABLE AFTER STUDYING WEB API'S)
setTimeout("console.log(true)"); // ? setTimeout can take JS code as it input
setTimeout("console.log('cdpatra')"); //output-> cdpatra
setTimeout("console.log('cdpatra')", 2000); //output-> cdpatra after 2 sec
// * IT IS NOT NECESSARY THAT WE HAVE TO PASS FIRST PARAMETER AS A STRING IN THE SETTIMEOUT FUNCTION, WE CAN PASS ANY VALID CODE OF JS
setTimeout(console.log("cdpatra"), 2000); //output-> cdpatra ( here the function will receive the returned value of the console.log() i.e. undefined

//~ if we want to write multiple code for the setTimeout() function then we have the separate lines with semicolon or if you want to use new line then user string literals
let timerID = setTimeout("console.log('Hi'); console.log('My name is cdpatra')", 1000);
console.log(timerID); // * setTimeout returns the timer ID

// >> if we want to stop the timer, we can stop it with the help of this timerID and a function called as clearTimeout()
clearTimeout(timerID);

// ! <|----------<< <| Passing higher order function in setTimeout() |> >>--------------|>
timerID = setTimeout(myFun1, 2000, "mile", [1, 2, 3, {}, "nature"]); //? here, we can pass further parameter which can be easily accessed by the arguments keyword of JS
function myFun1() {
  console.log("Hello World");
  console.log(arguments); // & BUT NOW THIS ARGUMENTS KEYWORD IS DEPRECIATED
}

setTimeout(function () {
  console.log("Hi from anonymous function");
}, 3000);

// ! <|-------<< Important question regarding setTimeout() for interview >>----------|>
// >> among the following codes, try to find the order of execution ???
setTimeout(console.log("Hello from setTimeout() but not within the string"));
console.log("Hello from outside the setTimeout()");
setTimeout('console.log("Hello from setTimeout()")');

// ! <<==============<< <| SETINTERVAL |> >>================>>
// ^ THIS SETINTERVAL RUNS A PARTICULAR CODE AFTER EVERY PARTICULAR DEFINED TIME INTERVAL; SETTIMEOUT WILL EXECUTE THE CODE FOR ONE TIME BUT SETINTERVAL RUNS THE CODE AGAIN AND AGAIN
timerID = setInterval(`console.log("Hi from setInterval")`, 1000);
setTimeout(`clearInterval(timerID)`, 5000); //? to stop the setInterval() we have to use clearInterval() function and pass the timerId as a parameter into it

// ! <|----------<< <| Passing higher order function in setInterval() |> >>--------------|>
let timerID2 = setInterval(myFun2, 2000);
function myFun2() {
  console.log("Hello from callback function");
}
setTimeout(`clearInterval(timerID2)`, 10000);

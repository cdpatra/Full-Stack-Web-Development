
const accountId = 13245; // const variables cannot be changed further
// accountId=2; (not allowed its an error)

//there are two methods to declare variables in js

let accountEmail = "abc@example.com";   //1st way
var accountPassword = "12345";          //2nd way (PREFER NOT TO USE DUE TO ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE)
accountCity = "jaipur";                 //in this way also we can declare our variables but NOT RECOMMENDED 
                                        // this type of declaration is possible because js is a type-safe language
let accountState;


/* in the initial days of js, it does not work upon the concept of scope. whenever any variable is declared
multiple times and any one programmer changes any particular variable's value js changes the value of all
the variable of that name.
!!! THEREFORE WE DO NOT USE "var" TO CREATE VARIABLES.
!!! THEREFORE WE GENEREALLY USE "let" TO CREATE OUR VARIABLES.
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

// variables other than const can be changed
accountEmail="hello@mail.com"
accountPassword="4567"
accountCity="uttar pradesh"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);


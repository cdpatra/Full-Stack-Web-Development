/** AND OPERATOR */
var userAge = 18;
console.log(userAge >= 18 && userAge <= 25); //output-> true
console.log(userAge > 18 && userAge <= 25); //output-> false

console.log(1 && 2); //OUTPUT ==> 2; THE OUTPUT IS NOT TRUE RATHER IT IS 2
/** THE OUTPUT OF ABOVE OPERATION IS 2 BECAUSE LOGICAL OPERATORS DO NOT RETURN  BOOLEAN AS THEIR OUTPUT, THEY RETURN TRUTHY OR FALSY VALUES */
console.log(2 && 1); //output-> 1;
console.log(NaN && 2); //OUTPUT==> NaN; THE OUTPUT IS NaN I.E. FALSY VALUE
console.log(2 && NaN); //output-> NaN
console.log(2 && 0); //output-> 0;
console.log("" && "hello"); //output-> ""; empty string
console.log("hello" && 4 + 4); //output-> 8

var userAge = 15;
const isCollegeStudent = userAge >= 18 && userAge <= 25;
const isSchoolStudent = userAge >= 5 && userAge <= 18;
console.log(isCollegeStudent); //output-> false
console.log(isSchoolStudent); //output-> true

/** OR OPERATOR */
const isStudent = isSchoolStudent || isCollegeStudent;
console.log(isStudent); //output-> true

console.log(NaN || Infinity); //output-> Infinity
console.log("" || {}); //output-> {}
console.log(-0 || []); //output-> []
console.log("hello" || 4 + 4); //output-> hello

// playing with logical operators
var variable;
const andResult = undefined && (variable = 5 + 5);
console.log(variable); //output-> undefined
const orResult = undefined || (variable = 5 + 4);
console.log(variable); //output-> 9

/** NOT OPERATOR */
/**
 * not operators converts the Truthy values into false and Falsy values to true
 */
console.log(!null); //output-> true
console.log(!!null); //output-> false
console.log(!{}); //output-> false
console.log(!""); //output-> true

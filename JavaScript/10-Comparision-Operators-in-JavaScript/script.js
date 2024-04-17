var userAge1 = 18;
var userAge2 = 24;
console.log(userAge1 == userAge2); //output-> false

var userAge1 = "24";
var userAge2 = 24;
console.log(userAge1 == userAge2); //OUTPUT-> TRUE; AS '==' OPERATOR IMPLICITLY TYPE CONVERTING STRING INTO NUMBER
/** THEREFORE WE SHOULD NOT USE '==' OPERATOR TO COMPARE VALUES OF DIFFERENT TYPES */

console.log(userAge1 === userAge2); //OUTPUT==> FALSE; THIS OPERATOR ALSO COMPARES THE TYPE OF THE VALUES
console.log(+userAge1 === userAge2); //output-> true; here the + operator is converting string into number
console.log(parseInt(userAge1) === userAge2); //output-> true

var userAge1 = 24;
var userAge2 = 24;
console.log(userAge1 != userAge2); //output-> false
var userAge1 = "24";
var userAge2 = 24;
console.log(userAge1 != userAge2); //output-> false
console.log(userAge1 !== userAge2); //output-> true

var userAge1 = "21";
var userAge2 = 24;
console.log(userAge2 > userAge1); //output-> true
console.log(userAge1 > userAge2); //output-> false

console.log(userAge1 < userAge2); //output-> true
console.log(userAge2 < userAge1); //output-> false

console.log(userAge1 >= userAge2); //output-> false
console.log(userAge2 <= userAge1); //output-> false

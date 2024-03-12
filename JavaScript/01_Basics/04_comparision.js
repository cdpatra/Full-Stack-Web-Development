console.log(2 > 1);     //output-> true
console.log(2 >= 1);     //output-> true
console.log(2 < 1);     //output-> false
console.log(2 == 1);     //output-> false
console.log(2 != 1);     //output-> true
console.log();

// THE ABOVE COMPARISIONS ARE ALSO TRUE FOR STRINGS.

// BUT THE PROBLEM ARISES WHEN WE DO NOT COMPARE WITH SAME DATATYPES
console.log("2" > 1);       //output-> true
console.log("02" > 1);      //output-> true
console.log();
//THERE IS ANOTHER LANGUAGE WHICH IS SIMILAR TO JAVASCRIPT KNOWN AS TYPESCRIPT WHICH PROVIDES
//STRCT RULES REGARDING TYPE CONVERSIONS.

//CONFUSION WITH null
console.log(null > 0);      //output-> false
console.log(null == 0);     //output-> false
console.log(null >= 0);     //output-> true !!!
console.log();
//THE REASON IS THAT AN EAQUALITY CHECK == AND COMPARISIONS > < >= <= WORK DIFFERENTY.
//COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0
//THAT'S WHY null >= 0 IS TRUE; null > 0 IS FALSE

//CONFUSION WITH undefined
console.log(undefined == 0);        //output-> false
console.log(undefined < 0);         //output-> false
console.log(undefined > 0);         //output-> false
console.log();

//STRICT CHECK ===
console.log("2" == 2);      //output-> true (BECAUSE "==" TRIES TO DO TYPE CONVERSION i.e. String TO Number)
console.log("2" === 2);     //output-> false (BECAUSE "===" ALSO CHECKS FOR THE DATATYPE OF BOTH THE VARIABLES)
console.log();
let marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heors = ["superman", "flash", "batman"];

marvel_heros.push(dc_heors);        // it do not concatenate two arrays rather it push array into original array
console.log(marvel_heros);          // push() CHANGES THE ORIGINAL ARRAY 
console.log();

// console.log(marvel_heros[3]);        //output-> [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);     //output-> flash
//  TRY NOT TO USE SUCH ABOVE TYPE OF (COMMENTED) SYNTAX;

//concat()
marvel_heros = ["thor", "ironman", "spiderman"];
const allHeros = marvel_heros.concat(dc_heors);     // concat() DOES NOT CHANGES THE ORIGINAL ARRAY
console.log(allHeros);
console.log();
//SPREAD (MOSTLY USED TO CONCATENATE TWO ARRAYS)
const allNewHeros = [...marvel_heros, ...dc_heors];
console.log(allNewHeros);
console.log();

// dealing with array inside another array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(another_array);
const real_another_array = another_array.flat(Infinity);// in case of Infinity you can pass the number to represent the depth to resolve the array
console.log(real_another_array);
/*output->
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

//converting any iterable into array
console.log(Array.isArray("cdpatra"));      //output-> false
console.log(Array.from("cdpatra"));
/*output->
[
    'c', 'd', 'p',
    'a', 't', 'r',
    'a'
]
*/
console.log(Array.from({ name: "cdpatra" }))  // here, input is an Object so it will return empty array
//  INTRESTING CASE FOR INTERVIEW

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.from(score1, score2, score3)); //error input of from should be an itrable

console.log(Array.from([score1, score2, score3]));  //output-> [ 100, 200, 300 
console.log(Array.of(score1, score2, score3));      //output-> [ 100, 200, 300 ]

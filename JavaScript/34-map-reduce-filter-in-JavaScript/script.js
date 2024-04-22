// ! <<=============<< <| MAP METHOD IN JAVASCRIPT |> >>================>>
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// >> in case of forEach method, it returns nothing i.e. undefined
const resultOfForEach = months.forEach((month) => {
  return month;
});
console.log(resultOfForEach); //output-> undefined

// & but map returns array
const capitalMonths = months.map((month) => month.toUpperCase());
console.log(capitalMonths); //output-> ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

// ^ there are three parameters that can be passed in the callback function
months.map((month, index, array) => {
  console.log(`${month} at index ${index} and the array is [${array}]`);
});

// ! <<===============<< FILTER METHOD IN JAVASCRIPT >>=============>>
// >> iteration count of filter is equal to the length of the array, if the callback function returns true then the filter function will add than particular element of the original array into resultant array otherwise if it returns false, it skips that element
const filteredMonth = months.filter((month, index, array) => {
  return month.length <= 5;
});
console.log(filteredMonth); //output-> ['March', 'April', 'May', 'June', 'July']

// * write a program to filter out months having 'm' letter
console.log(months.filter((month) => month.toLowerCase().includes("m"))); //output->  ['March', 'May', 'September', 'November', 'December']

// ~ example to understand map and filter
const students = [
  {
    name: "Alan Hodges",
    age: 33,
  },
  {
    name: "Harold Daniels",
    age: 84,
  },
  {
    name: "Jeanette Austin",
    age: 16,
  },
  {
    name: "Evelyn Collins",
    age: 72,
  },
  {
    name: "Addie Maxwell",
    age: 38,
  },
  {
    name: "Claudia Cooper",
    age: 17,
  },
];
console.log(students.filter((student) => student["age"] >= 18));
/** [
  { name: 'Alan Hodges', age: 33 },
  { name: 'Harold Daniels', age: 84 },
  { name: 'Evelyn Collins', age: 72 },
  { name: 'Addie Maxwell', age: 38 }
] */
console.log(students.filter((student) => student.age >= 18).map((student) => student.name)); //output-> ['Alan Hodges', 'Harold Daniels', 'Evelyn Collins', 'Addie Maxwell']

// ! <<================<< REDUCE METHOD IN JAVASCRIPT >>===============>>
const numbers = [24, 67, 36, 6, 90, 71, 3, 22, 53, 10];
let sumOfNumbers = numbers.reduce((accumulator, current, index, array) => {
  return accumulator + current; //& this return value will be passed into accumulator
}); //>> here, if we do not pass the initial value of the accumulator, then by default accumulator contains the first element of the array and the current will contain the second element of the array.
console.log(sumOfNumbers); //output-> 382

sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 100); //? here, the initial value of the accumulator will be 100
console.log(sumOfNumbers); //output-> 482

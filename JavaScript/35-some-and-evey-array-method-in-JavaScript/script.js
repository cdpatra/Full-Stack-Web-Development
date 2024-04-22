const evenNumbers = [0, 2, 3, 4, 6, 8];

// ! <<================<< SOME METHOD IN ARRAY >>================>>
// >> some method is also like loop, we generally used it to iterate over every element of the array and check some condition and return the the result of every condition check, if at least one of the condition is true it returns the overall result as true.
// & whenever it gets true, it will not do further checking of the condition and returns the overall values as true

console.log(
  evenNumbers.some((number, index, array) => {
    console.log(index + ":- " + number);
  })
); //output-> false //~ if we do not return explicitly then it returns false

console.log(evenNumbers.some((number) => number > 4)); //output-> true
console.log(evenNumbers.some((number) => number > 14)); //output-> false
console.log(
  evenNumbers.some((number) => {
    return number % 2;
  })
); //output-> true // ~ since, array contains one odd number therefore it returns true

// ! <<============<< EVERY METHOD IN ARRAY >>=============>>
// >> every method is just opposite to some method, if at least one of the condition returns false then overall result of every function will be false
// & whenever it gets false, it will not do further checking of the condition and returns the overall values as false

console.log(evenNumbers.every((number) => number % 2)); //output-> false

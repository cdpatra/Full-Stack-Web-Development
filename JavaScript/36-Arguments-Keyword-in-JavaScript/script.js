// ! <<==============<< ARGUMENTS KEYWORD IN JAVASCRIPT >>=============>>
function sum() {
  let finalSum = 0;
  console.log(arguments);
  for (const number of arguments) {
    finalSum += number;
  }
  return finalSum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //output-> 55

const sumExpression = function () {
  return Array.from(arguments).reduce((acc, curr) => acc + curr); //~ since arguments is not an array, so we can convert in into array and after that we can apply reduce array method on it.
};
console.log(sumExpression(1, 2, 3, 4, 5, 6)); //output-> 21

// & arguments keyword will only work for normal function declaration and function expression but it will not work in arrow function,

/* const sumArrow = () => {
  let finalSum = 0;
  for (const number of arguments) { //? since arguments keyword is not present in this keyword therefore it will give ERROR
    finalSum += number;
  }
  return finalSum;
}; */
// >> so in alternative of arguments we can use rest parameters
const sumArrow = (...numbers) => {
  let finalSum = 0;
  for (const number of numbers) {
    finalSum += number;
  }
  return finalSum;
};
console.log(sumArrow(3, 2, 1)); //output-> 6

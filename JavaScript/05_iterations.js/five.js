// for each loop
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  // callback function do not have any name and each element of the array is passed one by one to this callback function as its parameter
  console.log(val);
});
console.log();

coding.forEach((val) => {
  console.log(val);
});
console.log();

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); // here we only have to pass the reference of the function to the forEach loop

// CALLBACK FUNCTION OF FOREACH LOOP NOT ONLY HAVE THE VALUE AS PARAMETER, THERE ARE SOME OTHER PARAMETERS LIKE INDEX AND THE WHOLE ARRAYLIST

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// dealing with the case [{}, {}, {}]
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

const coding = ["js", "ruby", "java", "python", "cpp"];

var values = coding.forEach((item) => {
  console.log(item);
});
console.log(values); //output-> undefined

var values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values); //output-> undefined    FOREACH LOOP NEVER RETURNS ANY VALUE EVEN WE WRITE RETURN KEYWORD

// TO SOLVE THE ABOVE PROBLEM OF RETURNING VALUE OF FOREACH WE USE FILTER

var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newNums = myNums.filter((num) => num > 4); // here, we are using implicit return of arrow function
console.log(newNums); //output-> [ 5, 6, 7, 8, 9, 10 ]

var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newNums = myNums.filter((num) => {
  // here, arrow function will not return implicitly as we have started scope using curly braces
  num > 4;
});
console.log(newNums); //output-> []

var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums); //output-> [ 5, 6, 7, 8, 9, 10 ]

var newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums); //output-> [ 5, 6, 7, 8, 9, 10 ]
console.log();

// example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
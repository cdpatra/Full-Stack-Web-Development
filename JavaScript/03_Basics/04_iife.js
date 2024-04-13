// Immediately Invoked Function Expression (IIFE)

// why we need a function which immediately execute?
// 1. several times we write file in which there is only database connection and we want wheneve the application starts, the database connection starts immediately
// 2. to save the pollution from global scope to the functions's scope

function chai() {
  console.log(`DB CONNECTED`);
}
chai();

// IIFE
(function chai() {  /** named IIFE */
  console.log(`DB CONNECTED`);
})(); //<- here semicolon is necessary

(() => {
  console.log(`DB CONNECTED TWO`);
})();

((name) => {
  console.log("name: ", name);
})("cdpatra");

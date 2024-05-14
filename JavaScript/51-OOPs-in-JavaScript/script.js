// ! <<===============<< OOPs and Factory Functions in JavaScript  >>================>>
const user = {
   firstName: `Annie`,
   lastName: `Simmons`,
   age: 23,
   getBirthYear() {
      return new Date().getFullYear() - user.age;
   },
};
// * to create another user we have to rewrite the entire code
// const user2 = {
//    firstName: `Marcus`,
//    lastName: `Alexander`,
//    age: 32,
//    getBirthYear() {
//       return new Date().getFullYear() - user2.age;
//    },
// };

// ! <|--------<< Factory Functions >>--------|>
// & to create multiple users we can use factory function so that our code get reduces
function createUser(firstName, lastName, age) {
   const newUser = {
      firstName, //firstName: FirstName,
      lastName, //lastName: LastName,
      age, //age: age,
      getBirthYear() {
         return new Date().getFullYear() - newUser.age;
      },
   };
   return newUser;
}
let user1 = createUser(`Max`, `Douglas`, 32);
let user2 = createUser(`Hester`, `Weber`, 42);
console.log(user1.getBirthYear() === user2.getBirthYear()); //* output-> false
// ^ in the above implementation of factory function, the gitBirthYear() is assigned to each new created user, the functionality is same but takes extra memory for each user's object
// & to solve this issue, constructor functions were created by the JavaScript

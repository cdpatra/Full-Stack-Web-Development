// ! <<===============<< Constructor Function and new Keyword in JavaScript >>=============>>

// ! lets try to fix reusability issue of the getBirthYear() function without using the constructor function
// function getBirthYear() {
//    return new Date().getFullYear() - this.age;
// }
// function createUser(firstName, lastName, age) {
//    const newUser = {
//       firstName,
//       lastName,
//       age,
//       getBirthYear: getBirthYear,
//    };
//    return newUser;
// }
// let user1 = createUser(`Max`, `Douglas`, 32);
// let user2 = createUser(`Hester`, `Weber`, 42);
// console.log(user1.getBirthYear === user2.getBirthYear); //* Output-> true
// >> the answer is "true" because both the object points to the same function

// & the above method that we used to solve the problem of reuse of getBirthYear() is solved by the concept of polymorphism, as there is single function i.e. getBirthYear() and this changes for each user object (as we have used this keyword)

// ^ but this solution has some problem, as it does not follow the principle of encapsulation, it pollutes the global scope, any object other than user can also access this function.

// ! lets try another method
// >> since we know that behind the scenes function itself is an object, so we can store key value pairs in it also, we can use this feature to solve the issue

function createUser(firstName, lastName, age) {
   const newUser = {
      firstName,
      lastName,
      age,
      getBirthYear: createUser.commonMethods.getBirthYear,
   };
   return newUser;
}
createUser.commonMethods = {
   getBirthYear() {
      return new Date().getFullYear() - this.age;
   },
};
let user1 = createUser(`Max`, `Douglas`, 32);
let user2 = createUser(`Hester`, `Weber`, 42);
console.log(user1.getBirthYear === user2.getBirthYear); //* Output-> true
// ^ now in this way we have hided the function within the factory function itself and in this way our global scope is not polluted

// & all that we have done above is automatically done by the JavaScript by implementing prototype

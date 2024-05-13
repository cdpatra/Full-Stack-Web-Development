// ! <<=============<< Optional Chaining in JavaScript >>=============>>
const user = {
   firstName: "Caleb",
   lastName: "Cummings",
   age: 32,
   getFullName: function () {
      return user.firstName + ` ` + user.lastName;
   },
};

// console.log(user.address.city); //! error
// ! first way to solve the error
if (user.address) {
   console.log(user.address.city);
}
// ! second way
console.log(user.address && user.address.city);
// ! third way by (optional chaining)
console.log(user.address?.city);
console.log(user.address?.[`city`]);
// ! optional chaining with functions
console.log(user.getFullName?.());
console.log(user.GetFullName?.());

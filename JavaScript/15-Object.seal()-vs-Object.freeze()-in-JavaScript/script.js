const user = {
  firstName: "Adarsh",
  lastName: "Singh",
  address: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 4027403841,
      area: "787 sq km",
    },
  },
  age: 15,
  isGraduate: false,
};
// <<===============<|===========<<================//===========||=============//=============>>============|>===============>>
/** WE HAVE DEFINED OUR OBJECT USER BY USING CONST KEYWORD, SO IF WE ADD A NEW KEY VALUE PAIR WILL IT ALLOW ? */
/**
 * ANSWER ~> The answer of this question will be YES, because when we add a new key value pair, it get added to the memory location to which the user variable is pointing/referring, since user variable stores the address of the the object and in this case the address of object does not changed when we add a new key value pair, therefore it will not give any error.
 */

// <<======< <| Object.seal() |> >=====>>
Object.seal(user);
// we cannot delete key value pair after sealing the object
console.log(delete user.address); //output-> false
// we cannot add any new key value pair after sealing the object
user.mobileNumber = "8329583828"; // no change in the object
// BUT WE CAN CHANGE THE EXISTING VALUES IN THE OBJECT
user.firstName = "Akash";
console.log(user); // output-> {firstName: 'Akash', lastName: 'Singh', address: {…}, age: 15, isGraduate: false}

// <<======< <| Object.freeze() |> >=====>>
Object.freeze(user);
// we cannot delete key value pair after sealing the object
console.log(delete user.address); //output-> false
// we cannot add any new key value pair after sealing the object
user.mobileNumber = "8329583828"; // no change in the object
// WE EVEN CANNOT MODIFY THE EXISTING VALUES AFTER THE OBJECT GET FREEZED
user.firstName = "Jon"; // firstName would not be changed
console.log(user); //output-> {firstName: 'Akash', lastName: 'Singh', address: {…}, age: 15, isGraduate: false}

// OBJECT CONSTRUCTOR

const tinderUser = new Object(); //this way we can declare object using constructor and it is a Singleton object

const tinderUser2 = {}; //this is also an object but it is not Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); //output->{ id: '123abc', name: 'sammy', isLoggedIn: false }
console.log();

// ******************************************** Objects within Objects ******************************************
console.log(
  "*******************Objects within Objects**************************"
);
console.log();
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "chinam",
      middleName: "dibyadyuti",
      lastName: "patra",
    },
  },
};
console.log("accessing values from nested Objects");
console.log(regularUser.fullname.userFullName.firstName);
console.log();

// merging two or more objects
console.log("Merging two objects");
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "b", 4: "c" };

const obj3 = { obj1, obj2 }; // this is not the correct way
console.log(obj3); // output-> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'b', '4': 'c' } }

const obj4 = Object.assign(obj1, obj2); // IN THIS WAY THE OUTPUT WILL BE THE MERGED OBJECT BUT IT IS NOT THE RIGHT WAY
console.log(obj4); //output-> { '1': 'a', '2': 'b', '3': 'b', '4': 'c' }
const obj5 = Object.assign({}, obj1, obj2); // IN THIS WAY WE PASS AN EMPTY Object AS AN TARGES AND THE REST ARE CONSIDERED AS SOURCE
console.log(obj5); //output-> { '1': 'a', '2': 'b', '3': 'b', '4': 'c' }

// THE BEST WAY OF MERING OF TWO OBJECTS IS BY USING SPREAD OBJECTS
const obj6 = { ...obj1, ...obj2 };
console.log(obj6); //output-> { '1': 'a', '2': 'b', '3': 'b', '4': 'c' }

// WHENEVER WE GET DATA FROM DATABASE IT WILL IN THE FORM OF ARRAYS OF OBJECTS
const users = [
  {
    id: 1,
    email: "h@gamil.com",
  },
  {
    id: 2,
    email: "i@gamil.com",
  },
  {
    id: 3,
    email: "j@gamil.com",
  },
];
console.log(users[1].email); //output-> i@gamil.com

console.log(tinderUser); //output->{ id: '123abc', name: 'sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //THE OUTPUT WILL BE AN ARRAY OF KEYS; output->[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //THE OUTPUT WILL BE AN ARRAY OF VALUES; output->[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser)); //output-> [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //CHECKS WHETHER THE OBJECT HAS THAT PROPERTY OR NOT; output-> true

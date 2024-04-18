var user = {}; //EMPTY OBJECT

const user_1 = {
  firstName: "Akash",
  lastName: "Singh",
  age: 26,
  education: 12,
  city: "Bangalore",
};
const user_2 = {
  firstName: "Akash",
  lastName: "Singh",
  age: 26,
  education: 12,
  city: "Bangalore",
};

/** user1 and user2 have save values but their address are different, therefore non-primitive data types are reference type */
console.log(user_1 === user_2); //output-> false

const myName = "cdpatra"; //I created myName variable so that I can easily search my context on memory dev tools

const username1 =
  ""; /** here, both the strings will have same address, as equal values string are assigned to both the variables */
const username2 = "";

const user1 =
  {}; /** here, even though both the objects are same, but they are reference type i.e. non-primitive data types therefore both will have different address   */
const user2 = {};
console.log(user1 === user2); //output-> false
console.log(user1 == user2); //output-> false

const myObject = {
  firstName: "Adarsh", //INTERNALLY KEY IS CONSIDERED AS STRING
  "last-name": "Singh",
  cdpatra: "Developer",
  address: {
    city: "Bangalore",
    pinCode: "876876",
    state: "Karnataka",
    moreDetails: {
      population: 3142341342,
      area: "312 sq km",
    },
  },
};
/** <| WHEN WE CREATE OBJECT WITHIN OBJECT, THEN A NEW OBJECT IS CREATED AT NEW ADDRESS AND THAT OBJECT'S REFERENCE IS GIVEN TO THE KEY OF THE PARENT OBJECT |> */

// <<======< <| WAYS OF ACCESSING VALUES USING KEYS IN OBJECTS|> >=====>>
console.log(myObject.firstName); //output-> Adarsh
console.log(myObject["last-name"]); //output-> singh
console.log(myObject[myName]); //output-> Developer
console.log(myObject["first" + "Name"]); //output-> Adarsh

// <<======< <| INSERTING NEW KEY VALUE PAIR IN OBJECT |> >=====>>
console.log(myObject.age); //output-> undefined; as there is no key present in myObject named age;

myObject.age = 21; //IN THIS WAY WE CAN ADD A NEW KEY VALUE PAIR IN OBJECT
console.log(myObject["age"]); //output-> 21
console.log(myObject); //output-> {firstName: 'Adarsh', last-name: 'Singh', cdpatra: 'Developer', age: 21}

myObject["is-student"] = "true"; // THIS IS ANOTHER WAY TO ADD KEY VALUE PAIR IN OBJECT
console.log(myObject["is-student"]); //output-> true

// <<======< <| UPDATING KEY AND VALUE PAIRS IN OBJECT |> >=====>>
myObject.cdpatra = "Software Engineer";
console.log(myObject["cdpatra"]); //output-> Software Engineer

// <<======< <| ACCESSING VALUES FROM OBJECT WITHIN OBJECT|> >=====>>
console.log(myObject.address.city); //Bangalore;
console.log(myObject["address"]["pinCode"]); //output-> 876876

// <<======< <| DELETING KEY VALUE PAIR FROM OBJECT|> >=====>>
console.log(delete myObject.cdpatra); //output-> true
console.log(delete myObject["last-name"]); //output-> true

// <<======< <| TO CHECK WHETHER THE KEY IS PRESENT IN THE OBJECT OR NOT|> >=====>>
// by using 'in' operator we check whether the key is present in the object or not, it will check the direct property not the nested or inherited one
console.log("mobileNumber" in myObject); //output-> false
console.log("address" in myObject); //output-> true

/** IN JAVASCRIPT ARRAYS IS LIKE OBJECT */
console.log(typeof []); //output-> object

const fruitCollection = ["Apple", "Banana", "Grapes", "Dates"];

// <<======< <| ACCESSING ELEMENTS OF ARRAYS|> >=====>>
console.log(fruitCollection[2]); //output-> Grapes;
console.log(fruitCollection[10]); //output-> undefined; when we try to access out of bound element it returns undefined

// <<======< <| UPDATING ELEMENTS IN ARRAYS|> >=====>>
fruitCollection[2] = "Mango";
console.log(fruitCollection); //output-> ['Apple', 'Banana', 'Mango', 'Dates']
/** EVEN THOUGH THE ARRAY IS CREATED BY USING CONST KEYWORD BUT WE CAN CHANGE IT BECAUSE ARRAY IS OBJECT I.E. NON-PRIMITIVE VARIABLE, THEREFORE CHANGES ARE MADE DIRECTLY TO THE MEMORY LOCATION TO WHICH fruitCollection VARIABLE IS POINTING/REFERRING, DUE TO WHICH fruitCollection IS POINTING TO THE SAME MEMORY LOCATION BUT THE VALUE PRESENT AT THE MEMORY LOCATION GET CHANGED */
// <|  ARRAY IS MUTABLE BUT STRING IS NOT MUTABLE SO WE CANNOT UPDATE STRING, AS WE CAN UPDATE ARRAYS |>

// <<======< <| ADDING ELEMENTS IN ARRAYS|> >=====>>
fruitCollection[fruitCollection.length] = "Orange";
console.log(fruitCollection); //output-> ['Apple', 'Banana', 'Mango', 'Dates', 'Orange']
console.log(fruitCollection.length); //output-> 5
// another method of adding elements in arrays
console.log(fruitCollection.push("Papaya")); //output-> 6; push method it returns the current length of the array
console.log(fruitCollection); //output-> ['Apple', 'Banana', 'Mango', 'Dates', 'Orange', 'Papaya']
fruitCollection.push("Resins", "Tomato", "Berry"); // we can add more than one elements using push method
fruitCollection[50] = "Musk Melon";
console.log(fruitCollection); //output->  ['Apple', 'Banana', 'Mango', 'Dates', 'Orange', 'Papaya', 'Resins', 'Tomato', 'Berry', empty × 41, 'Musk Melon']

// we can make array having elements of different data types
const myArray = ["string", 21, null, undefined, true, { name: "cdpatra" }, ["Apple", "Orange", 21]];

// <<======< <| REMOVING ELEMENTS IN ARRAYS|> >=====>>
// we use pop() method to remove elements from end
console.log(fruitCollection.pop()); //output-> Musk Melon; returns the deleted value
console.log(fruitCollection.pop()); //output-> undefined

/** SINCE ARRAY IS AN OBJECT SO CAN WE MAKE KEY VALUE PAIR AS ITS ELEMENT ?*/
// const myArray = [firstName: "chinam"]; ERROR WE CANNOT MAKE KEY VALUE PAIR AS AN ELEMENT OF ARRAY LIKE THIS WAY
const newArray = [];
newArray.firstName = "chinam";
console.log(newArray); //output-> [firstName: 'chinam']; IN THIS WAY WE CAN ADD KEY VALUE PAIR, AS ARRAY IS OBJECT SO WE CAN USE OBJECT WAYS TO ADD KEY VALUE PAIR
console.log(newArray.length); //output-> 0; BUT THE LENGTH IS 0

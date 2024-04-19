const evenNumbers = [0, 2, 4, 6, 8];
const oddNumbers = [1, 3, 5, 7, 9];
const animals = ["Dog", "Cat", "Rat"];

// <<======< <| pop() |> >=====>>
// pop() removes element from end
console.log(evenNumbers.pop()); //output-> 8; pop() returns the deleted value
console.log(evenNumbers); //output-> [0, 2, 4, 6]

// <<======< <| push() |> >=====>>
// push() insert element from end
console.log(evenNumbers.push(8)); //output-> 5; push() returns the current length of the array
console.log(evenNumbers); //output-> [0, 2, 4, 6, 8]

// <<======< <| shift() |> >=====>>
// shift() remove element from start; JS engine has to do more effort in deleting element from start rather than from end
console.log(evenNumbers.shift()); //output-> 0; shift() returns the deleted value
console.log(evenNumbers); //output-> [2, 4, 6, 8]

// <<======< <| unshift() |> >=====>>
// unshift() insert element from start; here also JS engine has to do more effort in inserting element from start rather than from end
console.log(evenNumbers.unshift(0)); //output-> 5; unshift() returns the current length of the array
console.log(evenNumbers); //output-> [0, 2, 4, 6, 8]

// <<======< <| concat() |> >=====>>
// it takes more than 2 arrays and concat them and returns a new array; it does not modify our original array
console.log(evenNumbers.concat(animals)); //output-> [0, 2, 4, 6, 8, 'Dog', 'Cat', 'Rat']
console.log(animals.concat(evenNumbers)); //output-> ['Dog', 'Cat', 'Rat', 0, 2, 4, 6, 8]
console.log(evenNumbers.concat(oddNumbers, animals)); //output-> [0, 2, 4, 6, 8, 1, 3, 5, 7, 9, 'Dog', 'Cat', 'Rat']

// <<======< <| indexOf() |> >=====>>
// indexOf() returns the index of the element and returns -1 if the element is not present in the array
console.log(evenNumbers.indexOf(6)); //output-> 3
console.log(evenNumbers.indexOf(10)); //output-> -1
console.log(animals.indexOf("Cat")); //output-> 1
// if there are more than 1 same elements then it will return the first occurrence of the given element

// <<======< <| includes() |> >=====>>
// includes() returns true if the element is present in the array and returns false if not present
console.log(evenNumbers.includes(8)); //output-> true
console.log(evenNumbers.includes(10)); //output-> false
console.log(animals.includes("Cat")); //output-> true
console.log(animals.includes("Bat")); //output-> false

// <<======< <| reverse() |> >=====>>
// it reverse the original array
console.log(animals.reverse()); //output-> ['Rat', 'Cat', 'Dog']
console.log(animals); //output-> ['Rat', 'Cat', 'Dog']

// <<======< <| sort() |> >=====>>
// it sorts the array of strings alphabetically, it manipulates the original array
console.log(animals.sort()); //output-> ['Cat', 'Dog', 'Rat']
console.log(animals); //output-> ['Cat', 'Dog', 'Rat']
// this sort function do not work property for elements having integer elements
const myNumArray = [4, 32, 5, 13, 1, 67, 25, 3, 49];
console.log(myNumArray.sort()); //output-> [1, 13, 25, 3, 32, 4, 49, 5, 67]
// to make it work properly with numbers we have to pass some function into it

// <<======< <| slice() |> >=====>>
// it slice the array, but do not make changes in the original array
console.log(evenNumbers.slice(1)); //output-> [2, 4, 6, 8]
console.log(evenNumbers.slice(2, 4)); //output-> [4, 6]
console.log(evenNumbers); //output-> [0, 2, 4, 6, 8]

// <<======< <| splice() |> >=====>>
// it slice the array, and also make changes in the original array; it takes the index and the no. of elements and replaced element as it arguments
console.log(animals.splice(1, 2)); //output-> ['Dog', 'Rat']
console.log(animals); //output-> ['Cat']
console.log(evenNumbers.splice(2, 2, "Hello", "World", 10, 12, 14)); //output-> [4, 6]
console.log(evenNumbers); //output-> [0, 2, 'Hello', 'World', 10, 12, 14, 8]

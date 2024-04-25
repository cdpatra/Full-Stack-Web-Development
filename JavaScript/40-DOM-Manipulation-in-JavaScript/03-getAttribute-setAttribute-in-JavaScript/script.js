// ! <<=================<< naive approach to select attributes >>==============>>
console.dir(document.querySelector("[coder]"));
console.dir(document.querySelector("[coder]").attributes);
console.dir(document.querySelector("[coder]").attributes.coder.value); //output-> cdpatra

// ! <<===============<< getAttribute() >>==================>>
// >> the easy and shortcut method of above is
console.dir(document.querySelector("[coder]").getAttribute("coder")); //output-> cdpatra
// & if you provide invalid attribute to getAttribute() then it will return null
console.dir(document.querySelector("[coder]").getAttribute("invalid-attribute")); //output-> null
// ^ its output is a string, if any attribute has more than one value then it will return only the string not a list or array
console.dir(document.querySelector(`[coder="cdpatra"]`).getAttribute(`class`)); //output-> "class-1 class-2"

// !  <<==============<< setAttribute() >>=================>>
document.querySelector("h1").setAttribute("title", "Hello World !!!");
document.querySelector("h1").setAttribute("custom-attribute-name", "Hello World !!!");
document.querySelector("h1").setAttribute("id", "heading");

// ! <|----< we can select some common HTML attributes directly without using getAttribute() and setAttribute() method >---|>
console.log(document.querySelector("h1").id); // getting the attribute
document.querySelector("h1").id = "new-heading-id"; //setting the attributes
// ~ to access class directly without using getAttribute() or setAttribute() method we have to type className instead of typing class
document.querySelector("h1").className="heading-class"
console.log(document.querySelector("h1").className);
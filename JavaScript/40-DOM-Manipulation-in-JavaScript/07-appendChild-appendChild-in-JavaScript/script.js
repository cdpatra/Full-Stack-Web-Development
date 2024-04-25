const container = document.querySelector(".container");
const card = document.querySelector(".card");

// ! <<=================<< appendChild() >>===================>>
const h1 = document.querySelector("h1");
console.log(h1.cloneNode()); //* it will only copy the the innerText of the element, to copy the inner text have to pass true in the method
console.log(h1.cloneNode(true));

const newH1 = h1.cloneNode(true);
// container.appendChild(newH1); //>> appendChild do not copy the element, it just move the element, to copy and pasting we have to use cloneNode method, and its return value is the appended element

// ~ copy and paste the card 10 times
for (let i = 2; i <= 10; i++) {
  const newCard = card.cloneNode();
  newCard.innerText = i;
  container.appendChild(newCard);
}

// ^ we can append any element to any other element but a parent element cannot be appended into child element

// ! <<================<< append() >>===============>>

// ! <|------------<< difference between append and appendChild >>-------------|>
// >> Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects.
// ~ Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// & Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

// * to make appendChild() to take string as input, first we have to convert it into text node
const text = document.createTextNode("Hello this is text node converted from string");
container.appendChild(text);
// container.appendChild("normal string"); //>> ERROR

container.append("String appended by using append() function");
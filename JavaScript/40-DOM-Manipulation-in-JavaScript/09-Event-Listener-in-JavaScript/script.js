function sayHi() {
   console.log("hi");
}
// ! <<================<< <| eventListener() |> >>================>>

// ! First way of adding event listener
// ^ we can add inline eventListener directly to the element

const h1 = document.querySelectorAll(`h1`)[2];
console.log(h1.onclick); //output-> null //~ because nothing is
h1.onclick = sayHi;

// ! Second way of adding event listener
// & by using addEventListener() method

h1.addEventListener(`click`, sayHi);
h1.addEventListener(`click`, function () {
   console.log(`hi 2`);
});

// >> by using this method we can add more than one event listener to the element, but this cannot happen with the above first method
// ~ if we try to do by using the first method the later one will override the earlier one
// h1.ondblclick = sayHi;
// h1.ondblclick = function () {
//    console.log(`hi 2`);
// };

// * quick assignment: add an event listener to the card
const card = document.querySelector(`.card`);
card.addEventListener(`click`, () => console.log(`clicked on the card`));

// * quick assignment: a card will be generated when you click on the + card
let count = 0;
card.addEventListener(`click`, () => {
   const newCard = document.querySelector(`.card`).cloneNode();
   newCard.classList.remove(`add-card`);
   const container = document.querySelector(`.container`);
   newCard.innerText = ++count;
   container.append(newCard);
});

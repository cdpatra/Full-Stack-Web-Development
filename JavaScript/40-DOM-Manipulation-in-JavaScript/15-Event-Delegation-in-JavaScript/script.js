const container = document.querySelector(`.container`);
const addCardBtn = document.querySelector(`.add-card`);
let count = 1;

// ! <<=================<< Event Delegation >>=================>>
addCardBtn.addEventListener(`click`, () => {
   const newCard = document.createElement(`div`);
   newCard.classList.add(`card`);
   newCard.innerHTML = count++;
   container.append(newCard);
   // newCard.addEventListener(`click`, () => {    //>> but in this way, our performance will down as we are adding so much eventListener in our application
   //    newCard.remove();
   // });
});

// ^ another way is by adding just one eventListener on the parent container ( this process is called as event delegation )
container.addEventListener(`click`, (event) => {
   if (event.target !== container) event.target.remove();
});

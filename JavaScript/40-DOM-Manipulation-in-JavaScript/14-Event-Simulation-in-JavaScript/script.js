const container = document.querySelector(`.container`);
const addCardBtn = document.querySelector(`.add-card`);
let count = 1;
addCardBtn.addEventListener(`click`, () => {
   const newCard = document.createElement(`div`);
   newCard.classList.add(`card`);
   newCard.innerHTML = count++;
   container.append(newCard);
});

// ! <<==================<< Event Simulation in JavaScript >>================>>
// for (let i = 0; i < 50; i++) {
//    addCardBtn.click();
// }

// setInterval(() => addCardBtn.click(), 50);

const input = document.querySelector(`input`);
// input.focus(); //>> this will make the input element in focus whenever the page is loaded

setTimeout(() => {
   input.focus();
   console.log(`input focused`);
}, 1000);

setTimeout(() => {
   input.blur();
   console.log(`input blurred`);
}, 3000);

// & submit method
const form = document.querySelector(`form`);
setTimeout(() => {
   form.submit();
}, 10000);

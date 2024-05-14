// ! <<==================<< Why do we need React >>================>>
let count1 = 100;
let count2 = 0;
const basket1Count = document.querySelector(`#basket-1 p span`);
basket1Count.innerText = count1;
const basket1Btn = document.querySelector(`#basket-1-btn`);
const basket2Count = document.querySelector(`#basket-2 p span`);
basket2Count.innerText = count2;
const basket2Btn = document.querySelector(`#basket-2-btn`);

basket1Btn.addEventListener(`click`, () => {
   if (count1 > 0) {
      basket1Count.innerText = --count1;
      basket2Count.innerText = ++count2;
   }
});
basket2Btn.addEventListener(`click`, () => {
   if (count2 > 0) {
      basket1Count.innerText = ++count1;
      basket2Count.innerText = --count2;
   }
});

// ! in the above program we have done imperative programming, which means when we change the value of any variable be have to update it in our DOM, our DOM does not automatically update it

// ! but react is a declarative programming, in this we map the variable with the DOM element and when the variable's value changes it automatically change in the DOM

// ! reach is component based architecture

// ! reach help us to build single page web application
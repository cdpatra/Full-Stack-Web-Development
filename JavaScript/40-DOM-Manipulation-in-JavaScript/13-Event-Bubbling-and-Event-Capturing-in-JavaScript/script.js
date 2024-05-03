// ! <<==================<< Event Bubbling and Event Capturing >>==================>>
const green = document.querySelector(`.green`);
const pink = document.querySelector(`.pink`);
const blue = document.querySelector(`.blue`);

green.addEventListener(
   `click`,
   () => {
      console.log(`3. Green Event Listener`);
   },
   true
); //& here the another argument of addEventListener() which is for the event capturing

pink.addEventListener(
   `click`,
   () => {
      console.log(`2. Pink Event Listener`);
   },
   { capture: true }
); //?? another way of event capturing is passing an object

blue.addEventListener(
   `click`,
   (e) => {
      // e.stopPropagation(); //>> it stops the propagation of the events
      console.log(`1. Blue Event Listener`);
   },
   true
);

// ~ there is another key value which can be passed in the last argument of the addEventListener() which makes the event listener to work only for single time
// blue.addEventListener(
//    `click`,
//    () => {
//       console.log(`Blue Event Listener single time`);
//    },
//    { once: true }
// );

document.body.addEventListener(
   `click`,
   () => {
      console.log(`4. Body Event Listener`);
   },
   true
);

window.addEventListener(
   `click`,
   () => {
      console.log(`6. Window Event Listener`);
   },
   true
);

document.addEventListener(
   `click`,
   () => {
      console.log(`5. Document Event Listener`);
   },
   true
);

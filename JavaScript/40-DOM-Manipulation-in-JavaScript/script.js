// ! <<===============<< Keyboard Events >>=============>>
// ^ we can apply keyboard event on any element but it should be in focus, but we generally use with window/document object
// window.addEventListener(`keypress`, (e) => {
//    console.log(e.key, `key event on window`);
// });

// & there are three types of keyboard events
// * 1. key up
// * 2. key down
// * 3. key press

// ! key press event
// >> key press event gets triggered when we press the key, even if we continuously press the key it will be triggered continuously
const h1 = document.querySelector(`h1`);
h1.addEventListener(`keypress`, (e) => {
   console.log(`key value`, e.key);
   console.log(`key code`, e.code); //? key code does not change when we use caps lock ( it can be helpful to know the key when we use different language keyboard like hindi keyboard )
});

// ! key up event
h1.addEventListener(`keyup`, (e) => {
   console.log(e.code);
   console.log(e.key);
});

// ! key down event
h1.addEventListener(`keydown`, (e) => {
   console.log(e.code);
   console.log(e.key);
});

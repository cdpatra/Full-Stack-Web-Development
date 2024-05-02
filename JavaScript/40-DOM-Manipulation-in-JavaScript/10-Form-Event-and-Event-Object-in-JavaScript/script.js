// ! <<==================<< <| Form Event and Event Object |> >>=================>>
const username = document.querySelector(`#username`);
username.addEventListener(`click`, () => console.log(`input clicked`));

// * we commonly not use click event on input
// ~ following events are commonly used for input element

// ! input event
// const paragraph = document.querySelector(`#output`);
// username.addEventListener("input", (eventObject) => {
//    console.log(eventObject);
//    console.log(`user typed: ${eventObject.target.value}`); //^ target is the element on which the event war triggered
//    paragraph.innerHTML = eventObject.target.value;
// }); //& here, eventObject is passed as an argument by the addEventListener() method internally

// ! change event
// const paragraph = document.querySelector(`#output`);
// username.addEventListener("change", (eventObject) => {
//    console.log(eventObject);
//    console.log(`input changed: ${eventObject.target.value}`);
//    paragraph.innerHTML = eventObject.target.value;
// }); //& here, when user change the input text then it get triggered

// ! focus event
// const paragraph = document.querySelector(`#output`);
// username.addEventListener("focus", (eventObject) => {
//    console.log(eventObject);
//    console.log(`focused: ${eventObject.target.value || "empty string"}`);
//    paragraph.innerHTML = eventObject.target.value;
// }); //& here, when input element is in focused then this event get triggered

// ! blur event
// const paragraph = document.querySelector(`#output`);
// username.addEventListener("blur", (eventObject) => {
//    console.log(eventObject);
//    console.log(`user typed: ${eventObject.target.value || "empty string"}`);
//    paragraph.innerHTML = eventObject.target.value;
// }); //& here, when we click outside the input after it gets focused then this event get triggered

// ! <|------------- Form Events ------------|>
const form = document.querySelector(`form`);

// ! click event
form.addEventListener(`click`, (e) => {
   console.log(e.target); //>> here, when we click on input elements or button or on the form, the target get changed respectively; it returns that element be which the event was triggered
   console.log(e.currentTarget); //>> here, if we want to not to change the target then we can use currentTarget, it returns the element on which the event was added
});

// ! submit event (can only be applicable in forms)
form.addEventListener(`submit`, (e) => {
   e.preventDefault(); //^ this prevents the default behaviour ( this will help us to see the submit event object on the console )
   console.log(e);
});

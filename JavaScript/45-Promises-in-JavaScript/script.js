// ! <<=============<< Promises in JavaScript >>==========>>
// ^ in simple words promises are nothing but Objects

// ! <|---------<< creation of promises >>-----------|>
const p1 = new Promise(() => {}); //>> promise require a callback function as its parameter otherwise it will give error

// & a promise can be present in three states
// *-> Resolve
// *-> Pending
// *-> Reject

const p2 = new Promise((resolve, reject) => {
   document.querySelector(`#resolve`).addEventListener(`click`, () => {
      resolve(`Promise Resolved`);
   });
   document.querySelector(`#reject`).addEventListener(`click`, () => {
      reject(`Promise Rejected`);
   });
});

// >> the promise can be either resolved or rejected only once
p2.then((data) => {
   //& then() method returns promise
   // ? when promise resolve it automatically calls then()
   console.log(data);
   return 15; //~ and whatever we return in then() method it will become the result of the returned promise
})
   .catch((err) => {
      // ? when promise rejected it automatically calls then()
      //>> when promise rejected it throws an error and we have to handle it
      console.log(err);
   })
   .finally(() => {
      // >> when promise is in settle state then finally called
      console.log(`Finally`);
   });

// & actual working of promise
// *-> All the set up of promise is maintained by the browsers, browser tracks the pending state of the promise and when it resolves it calls the then() method and when it rejected it calls catch() method
// *-> The work of tracking the state of promise is done ASYNCHRONOUSLY

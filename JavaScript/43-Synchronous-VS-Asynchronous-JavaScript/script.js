// ! <<==============<< Synchronous vs Asynchronous JavaScript >>=================>>

// ! <|---------<< What is thread exactly? Thread in JavaScript >>---------|>
// ^ JavaScript is a single threaded programming language (IMPORTANT POINT)

/* The browser’s web API manages the countdown for setTimeout(), and both the web API and the JavaScript engine execute simultaneously within the main thread. Let’s break it down:

Web API and JavaScript Engine Interaction:
-> When you call setTimeout(callback, delay), the following steps occur:
-> The browser’s web API sets a timer to expire after the specified delay.
-> Meanwhile, the JavaScript engine continues executing other code.
-> The web API and the JavaScript engine operate concurrently within the same main thread.

Event Loop and Callback Queue:
-> The event loop monitors both the call stack (where currently executing functions reside) and the callback queue.
-> When the timer expires, the callback function is placed in the callback queue.

Asynchronous Execution:
-> The event loop ensures that the callback function runs asynchronously:
-> If the call stack is empty (no other code is running), the event loop picks up tasks from the callback queue and executes them.
-> This cooperative multitasking allows the main thread to handle other tasks while waiting for the timer to elapse.

No Separate Threads:
-> Crucially, there is no separate thread for timers or event handling.
-> Everything occurs within the same main thread, maintaining the single-threaded nature of JavaScript execution.

>=> In summary, the browser’s web API and the JavaScript engine work together to manage asynchronous tasks like setTimeout(), ensuring that your code remains responsive even during delays. 🕒🔗 */

// ! <<===============<< Blocking of main thread >>============>>

// ! By alert()
// alert(`The main thread is blocked ;-)`);

// ! By while loop
const blockingBtn = document.querySelector(`#blocking-btn`);
blockingBtn.addEventListener(`click`, () => {
   const startTime = Date.now();
   let currentTime = startTime;
   while (startTime + 5000 > currentTime) {
      // ~ this loop will block the main thread for 5 seconds
      currentTime = Date.now();
   }
});

const randomImgBtn = document.querySelector(`#random-img`);
const image = document.querySelector(`img`);
randomImgBtn.addEventListener(`click`, () => {
   const xhr = new XMLHttpRequest(); //^ this XMLHttpRequest works asynchronously on different thread
   xhr.responseType = `json`;
   xhr.open(`GET`, `https://dog.ceo/api/breeds/image/random`);
   xhr.send();
   xhr.addEventListener(`load`, () => {
      console.log(`status: success`);
      image.src = xhr.response.message;
   });
});
// ! <| this is known as AJAX (asynchronous javascript and XML) |>

const delayAPIBtn = document.querySelector(`#delay-api`);
delayAPIBtn.addEventListener(`click`, () => {
   const xhr = new XMLHttpRequest();
   console.log(`before response is received`, xhr);

   xhr.open(`GET`, "https://fakeresponder.com?sleep=5000", false); //>> by adding false as a third parameter in the open() method we can execute our XMLHttpRequest() synchronously (BY DEFAULT IT IS TRUE, I.E. ASYNCHRONOUS CALL)
   xhr.send();

   xhr.addEventListener(`load`, () => {
      console.log(`after response is received`, xhr);
   });
   // !  since, due to synchronous execution of XMLHttpRequest() our main thread get blocked until our response is received;
});

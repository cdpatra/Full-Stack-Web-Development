// ! <<==========<< Async and Await in JavaScript >>=============>>

// ^ async function will always return promise.
// ~ promise returned by the async function is always resolved (fulfilled).
// * to make the returned promise rejected we have to throw an error.

async function fun1() {
   console.log(`hello`); //& by default the async function returns resolved promise
}

async function fun2() {
   throw `error in program`; //& to make the promise rejected we have to explicitly throw an error
   throw new Error(`Error in program`); //?? another way to throw error, by using Error() constructor
}

// ! <|----------<< in async function only we can use await keyword >>---------|>
async function makeRequest() {
   fetch(`https://fakeresponder.com?sleep=4000`)
      .then((res) => res.json())
      .then(console.log);
   console.log(`hi after then`); //* then() do not stop the execution of the further code until the promise is in its settled state, therefore this line will execute when the function is called, it do not wait for the promise to be resolved

   //^ but  we can use await instead of then() method
   const response = await fetch(`https://fakeresponder.com?sleep=4000`); //& await returns the result of promise
   console.log(`response`, response);

   const data = await response.json(); //& since json() also returns the promise, therefore we can use await here also which returns the result of the promise
   console.log(`data`, data);
   console.log(`hi after await`); //* "await" do stop the further execution of the code until the promise is in its settled state, therefore this line will execute after the promise is resolved
}
// & ACTUAL WORKING OF AWAIT :-
// ^when promise is in waiting state, the async function with await will get removed from the call clack, and when the promise is resolved in different thread the async function return back to the call stack of main thread and stars where it was left earlier

// ! await can only be used inside a async function but can also be used within module scope

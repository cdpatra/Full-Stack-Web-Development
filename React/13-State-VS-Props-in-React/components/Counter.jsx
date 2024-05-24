import { useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);
   const [name, setName] = useState(`dibyadyuti`);

   return (
      <div style={{ textAlign: `center` }}>
         <h1>{count}</h1>
         <button
            style={{ width: `max-content` }}
            onClick={() => {
               // ! here if we call setCount() more than 1 times, still our counter increments only once !!!
               setCount(count + 1);
               setCount(count + 1);
               setCount(count + 1);

               // ! if our next value depends on previous value then we can use setFunction() in following way
               setCount((previousState) => previousState + 1);
               setCount((previousState) => previousState + 1);
               setCount((previousState) => previousState + 1);
            }}>
            Increase Count
         </button>
      </div>
   );
   // ! working of the useState() function
   // *-> useState() create array and stores the updated value of the state variable, it maintains an array because within a single React Functional Component there can be more than one state variables.
   /* e.g. const states = [0,`dibyadyuti`] */
   // ~ -> and whenever we call the setFunction() of the useState() it updates the respective state variable's value in the array, and after updation of the array it calls the function again to render it
   // &-> and after the recall of the function, this time the useState() will not reassign the initial value, it assigns the value of the state variable associated to it in the array.
   // % -> useState() re-renders the function after end of the functional scope of the setFunction()
   // >> -> useState() works synchronously
}

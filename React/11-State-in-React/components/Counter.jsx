import { useState } from "react";

export default function Counter() {
   // ! useState() is a hook, hook is nothing but a fancy name, hook is just a function which provides some special functionality
   // ! any function starts with "use" is a hook

   const [count, setCount] = useState(0);

   return (
      <div style={{ textAlign: `center` }}>
         <h1>{count}</h1>
         <button
            style={{ width: `max-content` }}
            onClick={() => {
               setCount(count + 1);
            }}>
            Increase Count
         </button>
      </div>
   );
}

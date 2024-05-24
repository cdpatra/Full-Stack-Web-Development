import { useState } from "react";

export default function Counter() {
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

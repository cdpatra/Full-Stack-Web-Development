import { useState } from "react";

export default function Counter({ children }) {
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
         
         {/* //! here we have rendered the children */}
         {children}
      </div>
   );
}

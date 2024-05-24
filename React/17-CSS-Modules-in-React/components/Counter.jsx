import { useState } from "react";

// ! <<============<< CSS Modules >>=============>
// % behind the scenes, parcel takes our module.css file, whatever class we have defined in that css file is encapsulated within the object and we can access the required css classes with the help of dot notation or bracket notation.
//& parcel adds some encrypted code before the name of the css classes.
// ^ CSS Modules are used to scope the effect of CSS within a particular component.
// >> It is not the feature of React, it is the feature of our parcel bundler

import styles from "./Counter.module.css";

export default function Counter() {
   const [count, setCount] = useState(0);

   console.log(styles); //*output-> it is an Object

   return (
      <div style={{ textAlign: `center` }}>
         <h1 className={styles[`text-xl`]}>{count}</h1> {/** accessing the css module class */}
         <button
            className={[styles.button, styles[`text-xl`]].join(` `)} // accessing multiple css module class(we have to pass className as a string to add multiple css class)
            style={{ width: `max-content` }}
            onClick={() => {
               setCount(count + 1);
            }}>
            Increase Count
         </button>
      </div>
   );
}

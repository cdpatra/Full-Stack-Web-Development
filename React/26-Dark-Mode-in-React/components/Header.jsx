import { useEffect, useState } from "react";

export default function Header({ theme }) {
   const [darkMode, setDarkMode] = theme;

   // ! it is not good to manipulate the DOM so we can give dark class dynamically to the element.
   // function switchTheme() {
   //    const body = document.querySelector(`body`);
   //    body.classList.toggle(`dark`);
   // }

   useEffect(() => {
      if (localStorage.getItem(`dark-mode`) === `true`) {
         // switchTheme();
         setDarkMode(true);
      } else {
         localStorage.setItem(`dark-mode`, `false`);
         setDarkMode(false);
      }
   }, []);

   return (
      <header className={`header-container${darkMode ? " dark" : ""}`}>
         <a href="./" className="heading">
            <i className="fa-solid fa-earth-asia" />
            &nbsp; Atlas
         </a>
         <div className="header">
            <h2>Where in the world?</h2>
            <div
               id="mode"
               onClick={() => {
                  if (localStorage.getItem(`dark-mode`) === `true`) {
                     localStorage.setItem(`dark-mode`, `false`);
                     setDarkMode(false);
                  } else {
                     localStorage.setItem(`dark-mode`, `true`);
                     setDarkMode(true);
                  }
                  // switchTheme();
               }}>
               {darkMode ? <i className="fa-solid fa-sun" /> : <i className="fa-solid fa-moon" />}
               <p>
                  &nbsp; <span>{darkMode ? `Light Mode` : `Dark Mode`}</span>
               </p>
            </div>
         </div>
      </header>
   );
}

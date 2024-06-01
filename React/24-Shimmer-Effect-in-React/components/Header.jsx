export default function Header() {
   return (
      <header className="header-container">
         <a href="./" className="heading">
            <i className="fa-solid fa-earth-asia" />
            &nbsp; Atlas
         </a>
         <div className="header">
            <h2>Where in the world?</h2>
            <div id="mode">
               <i className="fa-solid fa-moon" />
               <p>
                  &nbsp; <span>Dark Mode</span>
               </p>
            </div>
         </div>
      </header>
   );
}

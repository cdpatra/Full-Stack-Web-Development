export default function SearchBarFilter({ setQuery }) {
   return (
      <div id="search-filter">
         <div id="search">
            <label htmlFor="search-input">
               <i className="fa-solid fa-magnifying-glass" />
            </label>
            <input
               onChange={(e) => setQuery(e.target.value.toLowerCase().trim())}
               id="search-input"
               type="text"
               placeholder="Search for a country..."
            />
         </div>
         <div id="filter">
            <p>
               Filter by Region
               <i className="fa-solid fa-chevron-down" />
            </p>
            <ul className="menus">
               <li>No Filter</li>
               <li>Africa</li>
               <li>Americas</li>
               <li>Asia</li>
               <li>Europe</li>
               <li>Oceania</li>
            </ul>
         </div>
      </div>
   );
}

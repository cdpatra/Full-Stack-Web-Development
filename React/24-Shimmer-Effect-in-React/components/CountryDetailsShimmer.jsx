import "./CountryDetailsShimmer.css";
import { Link } from "react-router-dom";

export default function CountryDetailsShimmer() {
   return (
      <section id="country-section" className="shimmer">
         <img id="country-flag" className="shimmer-flag" />
         <h1 id="country-name" className="shimmer-name"></h1>
         <div id="country-info">
            {Array.from({ length: 5 }).map((ele,i) => (
               <p key={i}></p>
            ))}
         </div>
         <div id="extra-info">
            {Array.from({ length: 3 }).map((ele,i) => (
               <p key={i}></p>
            ))}
         </div>
         <div id="border-info">
            <p></p>
            <div id="border-countries-list">
               {Array.from({ length: 5 }).map((ele,i) => (
                  <Link key={i}></Link>
               ))}
            </div>
         </div>
         <div id="map">
            <p id="map-link"></p>
         </div>
      </section>
   );
}

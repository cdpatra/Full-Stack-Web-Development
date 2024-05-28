import { Link } from "react-router-dom";

export default function CountryCard(props) {
   const { name, officialName, flag, alt, population, region, capital } = props;
   return (
      //! using Link component rather than anchor tag.
      // % not reloading of a web page is the feature of javascript, react-router-dom uses history API to do this.
      // >> history.pushState({},{},"url");
      
      <Link className="card" to={`./country?name=${officialName}`}>
         <img src={flag} alt={alt ?? ""} />
         <div className="information">
            <h3>{name}</h3>
            <p>
               <strong>Population: </strong>
               {population}
            </p>
            <p>
               <strong>Region: </strong>
               {region}
            </p>
            <p>
               <strong>Capital: </strong>
               {capital}
            </p>
         </div>
      </Link>
   );
}

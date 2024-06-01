import { Link } from "react-router-dom";

export default function CountryCard(props) {
   const { name, officialName, flag, alt, population, region, capital } = props;
   return (
      <Link className="card" to={`./${officialName}`}>
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

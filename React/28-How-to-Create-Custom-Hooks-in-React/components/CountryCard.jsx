import { Link } from "react-router-dom";

export default function CountryCard(props) {
   const { name, officialName, flag, alt, population, region, capital ,data} = props;
   return (
      // ! to pass data from one page to another page, react-router-dom provides "state" argument/attribute in "link" tag to which we can pass data to the redirecting page.
      <Link className="card" to={`./${officialName}`} state={data}>
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

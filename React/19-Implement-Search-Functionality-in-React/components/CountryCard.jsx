export default function CountryCard(props) {
   const { name, flag, alt, population, region, capital } = props;
   return (
      <a className="card" href="./country.html?name=Republic of Moldova">
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
      </a>
   );
}

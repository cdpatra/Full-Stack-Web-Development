import { useEffect, useState } from "react";

export default function CountryDetails() {
   const countryOfficialName = new URLSearchParams(location.search).get(`name`);
   const [countryData, setCountryData] = useState(null);

   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${countryOfficialName}?fullText=true`)
         .then((res) => res.json())
         .then(([data]) => {
            setCountryData({
               name: data.name.common,
               nativeName: Object.values(data.name.nativeName)[0].common,
               population: data.population,
               region: data.region,
               subregion: data.subregion,
               capital: data.capital,
               flag: data.flags.svg,
               alt: data.flags.alt,
               tld: data.tld,
               languages: Object.values(data.languages).join(`, `),
               currencies: Object.values(data.currencies)
                  .map((currency) => currency.name)
                  .join(`, `),
            });
         })
   }, []);

   return countryData === null ? (
      `Loading...`
   ) : (
      <section id="country-section">
         <img id="country-flag" src={countryData.flag} alt={countryData.alt} />
         <h1 id="country-name">{countryData.name}</h1>
         <div id="country-info">
            <p id="native">
               <strong>Native Names:</strong>&nbsp;&nbsp;{countryData.nativeName}
            </p>
            <p id="population">
               <strong>Population:</strong>&nbsp;&nbsp;{countryData.population.toLocaleString(`en-IN`)}
            </p>
            <p id="region">
               <strong>Region:</strong>&nbsp;&nbsp;{countryData.region}
            </p>
            <p id="sub-region">
               <strong>Sub Region:</strong>&nbsp;&nbsp;Eastern Europe
            </p>
            <p id="capital">
               <strong>Capital:</strong>&nbsp;&nbsp;{countryData.capital.join(`, `)}
            </p>
         </div>
         <div id="extra-info">
            <p id="top-level-domain">
               <strong>Top Level Domain:</strong>&nbsp;&nbsp;&nbsp;{countryData.tld}
            </p>
            <p id="currencies">
               <strong>Currencies:</strong>&nbsp;&nbsp;{countryData.currencies}
            </p>
            <p id="languages">
               <strong>Languages:</strong>&nbsp;&nbsp;{countryData.languages}
            </p>
         </div>
         <div id="border-info">
            <p>
               <strong>Border Countries:</strong>
            </p>
            <div id="border-countries-list">
               {/* <a href="#">India</a> */}
               <a href="./country.html?name=Romania">Romania</a>
               <a href="./country.html?name=Ukraine">Ukraine</a>
            </div>
         </div>
         {/* ! country map link */}
         <div id="map">
            <p id="map-link">
               <strong>Map: </strong>
               <a target="blank" href="https://goo.gl/maps/JjmyUuULujnDeFPf7">
                  Click here to see this country on Google Map
               </a>
            </p>
         </div>
      </section>
   );
}

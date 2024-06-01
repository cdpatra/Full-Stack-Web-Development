import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";

export default function CountryDetails() {
   const params = useParams();
   const countryName = params.country;

   const [countryData, setCountryData] = useState(null);
   const [notFound, setNotFound] = useState(false);

   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
         .then((res) => res.json())
         .then(([data]) => {
            setCountryData({
               name: data.name.common,
               officialName: data.name.official,
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
               // borders: ["India", "United States"],
               borders: [],
            });
            // & not a good approach
            // data.borders.map((border) => {
            //    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            //       .then((res) => res.json())
            //       .then(([borderCountry]) => {
            //          setCountryData((prevState) => ({
            //             ...prevState,
            //             borders: [...prevState.borders, borderCountry.name.common],
            //          }));
            //       });
            // });
            // & better approach to do nested fetching is by using Promise.all() method which takes array of promises, then wait for all the promises to be resolved, after that .then() is called, in this way we can optimize unnecessary multiple re-rendering of the component.
            data.borders &&
               Promise.all(
                  data.borders.map((border) => {
                     // % it will return array of promises
                     return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                        .then((res) => res.json())
                        .then(([borderCountry]) => ({
                           commonName: borderCountry.name.common,
                           officialName: borderCountry.name.official,
                        }));
                  })
               ).then((allBordersName) => {
                  setCountryData((prevState) => ({ ...prevState, borders: allBordersName }));
               });
         })
         .catch((e) => {
            console.log(e);
            setNotFound(true);
         });
   }, [countryName]);

   if (notFound) {
      return <h1>Country Not Found</h1>;
   }

   return countryData === null ? (
      <CountryDetailsShimmer />
   ) : (
      <>
         <div id="back-button" onClick={() => history.back()}>
            <span>
               <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
            </span>
         </div>
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
                  <strong>Sub Region:</strong>&nbsp;&nbsp;{countryData.subregion}
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
            {countryData.borders.length !== 0 && (
               <div id="border-info">
                  <p>
                     <strong>Border Countries:</strong>
                  </p>
                  <div id="border-countries-list">
                     {countryData.borders.map(({ commonName, officialName }) => (
                        <Link key={officialName} to={`/${officialName}`}>
                           {commonName}
                        </Link>
                     ))}
                  </div>
               </div>
            )}
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
      </>
   );
}

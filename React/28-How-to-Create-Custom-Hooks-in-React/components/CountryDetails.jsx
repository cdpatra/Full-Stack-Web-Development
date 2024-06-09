import { useEffect, useState } from "react";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetails() {
   const params = useParams();
   const countryName = params.country;

   const [countryData, setCountryData] = useState(null);
   const [notFound, setNotFound] = useState(false);

   useEffect(() => {
      if (window.innerWidth <= 680) {
         window.scrollTo(0, 65);
      } else {
         window.scrollTo(0, 103);
      }
   }, []);

   // ! to access the data of state argument/attribute react-router-dom provides a hook called useLocation()
   const { state } = useLocation();

   //! useOutletContext() is a hook given by react-router-dom to access the context
   // const [darkMode] = useOutletContext();

   // ! using custom context
   const [darkMode] = useTheme();

   function updateCountryData(data) {
      setCountryData({
         name: data.name.common,
         officialName: data.name.official,
         nativeName: data.name.nativeName ? Object.values(data.name.nativeName)[0].common : "",
         population: data.population,
         region: data.region,
         subregion: data.subregion,
         capital: data.capital,
         flag: data.flags.svg,
         alt: data.flags.alt,
         tld: data.tld,
         languages: data.languages ? Object.values(data.languages).join(`, `) : "",
         currencies: data.currencies
            ? Object.values(data.currencies)
                 .map((currency) => currency.name)
                 .join(`, `)
            : "",
         // borders: ["India", "United States"],
         borders: [],
         map: data.maps.googleMaps,
      });
      data.borders &&
         Promise.all(
            data.borders.map((border) => {
               return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                  .then((res) => res.json())
                  .then(([borderCountry]) => ({
                     commonName: borderCountry.name.common,
                     officialName: borderCountry.name.official,
                  }))
                  .catch((err) => {
                     return {
                        commonName: "Error",
                     };
                  });
            })
         ).then((allBordersName) => {
            console.log(allBordersName);
            setCountryData((prevState) => ({ ...prevState, borders: allBordersName }));
         });
   }

   useEffect(() => {
      if (state) {
         updateCountryData(state);
      } else {
         fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
               updateCountryData(data);
            })
            .catch((e) => {
               setNotFound(true);
            });
         // % setting the countryData state variable to null to get the shimmer effect.
         setCountryData(null);
      }
   }, [countryName]);

   if (notFound) {
      return <h1>Country Not Found</h1>;
   }

   const windowSize = useWindowSize();

   return countryData === null ? (
      <CountryDetailsShimmer className={`${darkMode ? " dark" : ""}`} />
   ) : (
      <div className={`country-detail-container${darkMode ? " dark" : ""}`}>
         <h1 style={{ textAlign: "center", margin: 0, padding: "2rem" }}>
            {windowSize.width} X {windowSize.height}{" "}
         </h1>
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
                  <strong>Capital:</strong>&nbsp;&nbsp;{countryData.capital?.join(`, `)}
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
                  <a target="blank" href={countryData.map}>
                     Click here to see this country on Google Map
                  </a>
               </p>
            </div>
         </section>
      </div>
   );
}

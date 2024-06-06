// import CountriesData from "../CountriesData.js";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";

export default function CardContainer({ query }) {
   const [fetchedData, setFetchedData] = useState([]);
   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
         .then((res) => res.json())
         .then((data) => {
            setFetchedData(data);
         });
   }, []);

   const filterCountries = fetchedData.filter((country) => {
      return country.name.official.toLowerCase().includes(query);
   });
   const cardArray = filterCountries.map((country) => {
      return (
         <CountryCard
            key={country.name.official}
            officialName = {country.name.official}
            name={country.name.common}
            flag={country.flags.svg}
            alt={country.flags.alt}
            population={country.population.toLocaleString(`en-IN`)}
            region={country.region}
            capital={country.capital ?? "No Capital"}
         />
      );
   });

   return <main className="card-container">{cardArray}</main>;
}
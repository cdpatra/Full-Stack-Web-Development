// import CountriesData from "../CountriesData.js";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CardContainerShimmer from "./CardContainerShimmer.jsx";

export default function CardContainer({ query }) {
   const [fetchedData, setFetchedData] = useState([]);
   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
         .then((res) => res.json())
         .then((data) => {
            setFetchedData(data);
         })
         .catch((err) => {
            return <p>{err}</p>;
         });
   }, []);

   if (fetchedData.length === 0) {
      return <CardContainerShimmer />;
   }

   const filterCountries = fetchedData.filter((country) => {
      return country.name.official.toLowerCase().includes(query) || country.name.common.toLowerCase().includes(query);
   });
   const cardArray = filterCountries.map((country) => {
      return (
         <CountryCard
            key={country.name.official}
            officialName={country.name.official}
            name={country.name.common}
            flag={country.flags.svg}
            alt={country.flags.alt}
            population={country.population.toLocaleString(`en-IN`)}
            region={country.region}
            capital={country.capital ?? "No Capital"}
            data={country}
         />
      );
   });

   return <main className="card-container">{cardArray}</main>;
}

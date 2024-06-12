// import CountriesData from "../CountriesData.js";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";

export default function CardContainer({ query }) {
   // ! <|-----------------<< trying without using useEffect() hook >>---------------|>
   const [fetchedData, setFetchedData] = useState([]);
   /* if (fetchedData.length === 0) {
      fetch(`https://restcountries.com/v3.1/all`)
         .then((res) => res.json())
         .then((data) => {
            setFetchedData(data);
         });
   } */
   // ! <<=================<< useEffect() hook >>=================>>
   // % use effect takes two arguments, first one is the callback function and the second one is the array.
   // >> if the array is empty then useEffect() hook will execute only one time.
   // ~ the second argument is called as dependency list/array
   // ^ in the dependency array we can add state variables, whenever the variable get changed our useEffect() will execute its callback function
   // & useEffect() hook is mainly used to monitor the state
   // ! useState() hook is used to create state, and useEffect() hook is used to monitor the state.
   // * if we return any function in the callback function of useEffect() hook, then it is called as cleanup function, this cleanup function is called when our component gets unmounted (unmounting happens automatically when we use routing in our web page).
   // & useEffect() runs after the re-rendering of the component 

   // ! <| Let's try fetch the data using useEffect() hook |>
   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
         .then((res) => res.json())
         .then((data) => {
            setFetchedData(data);
         });

      const intervalID = setInterval(() => {
         console.log(`running CardContainer component`);
      }, 1000);

      return () => {
         //& cleanup function
         console.log(`Cleaning up`);
         // ^ if we do not clear the time interval then after the unmount of the component, the setInterval will work, so in the case of routing cleanup function helps in these cases, it also helps in the similar case of the event listeners
         clearInterval(intervalID);
      };
   }, []);

   const filterCountries = fetchedData.filter((country) => {
      return country.name.official.toLowerCase().includes(query);
   });
   const cardArray = filterCountries.map((country) => {
      return (
         <CountryCard
            key={country.name.official}
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

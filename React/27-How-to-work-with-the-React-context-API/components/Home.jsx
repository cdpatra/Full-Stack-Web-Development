import { useContext, useState } from "react";
import CardContainer from "./CardContainer";
import SearchBarFilter from "./SearchBarFilter";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
   const [query, setQuery] = useState("");
   
   // ! accessing context value argument using useContext() hook of react
   console.log(useContext(ThemeContext));

   const [darkMode] = useContext(ThemeContext);
   return (
      <div className={`container${darkMode ? " dark" : ""}`}>
         <SearchBarFilter setQuery={setQuery} />
         <CardContainer query={query} />
      </div>
   );
}

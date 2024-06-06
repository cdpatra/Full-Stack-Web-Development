import { useState } from "react";
import CardContainer from "./CardContainer";
import SearchBarFilter from "./SearchBarFilter";
import { useOutletContext } from "react-router-dom";

export default function Home() {
   const [query, setQuery] = useState("");
   // ! useOutletContext() is a hook given by react-router-dom
   const [darkMode] = useOutletContext();

   return (
      <div className={`container${darkMode ? " dark" : ""}`}>
         <SearchBarFilter setQuery={setQuery} />
         <CardContainer query={query} />
      </div>
   );
}

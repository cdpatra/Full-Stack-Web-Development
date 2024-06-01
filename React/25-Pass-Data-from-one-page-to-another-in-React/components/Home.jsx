import { useState } from "react";
import CardContainer from "./CardContainer";
import SearchBarFilter from "./SearchBarFilter";

export default function Home(){
   const [query, setQuery] = useState("");

   return (
      <div className="container">
         <SearchBarFilter setQuery={setQuery} />
         <CardContainer query={query} />
      </div>
   );
};

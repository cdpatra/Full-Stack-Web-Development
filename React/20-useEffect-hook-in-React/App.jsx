import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import SearchBarFilter from "./components/SearchBarFilter";
import SearchBar from "./components/SearchBarFilter";
import "./style.css";

export default function App() {
   const [query, setQuery] = useState("");
   return (
      <>
         <div className="container">
            <Header />
            <SearchBarFilter setQuery={setQuery} />
            {/* //! simulating unmount */}
            {query === `unmount` ? "Un-Mounted" : <CardContainer query={query} />}
         </div>
      </>
   );
}

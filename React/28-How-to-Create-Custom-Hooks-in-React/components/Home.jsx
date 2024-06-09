import { useState } from "react";
import CardContainer from "./CardContainer";
import SearchBarFilter from "./SearchBarFilter";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
   const [query, setQuery] = useState("");
   const [darkMode] = useTheme();
   const windowSize = useWindowSize();
   return (
      <div className={`container${darkMode ? " dark" : ""}`}>
         <h1 style={{ textAlign: "center", margin: 0, padding: "2rem" }}>
            {windowSize.width} X {windowSize.height}{" "}
         </h1>
         <SearchBarFilter setQuery={setQuery} />
         <CardContainer query={query} />
      </div>
   );
}

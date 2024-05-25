import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import SearchBarFilter from "./components/SearchBarFilter";
import SearchBar from "./components/SearchBarFilter";
import "./style.css";

export default function App() {
   return (
      <>
         <div className="container">
            <Header />
            <SearchBarFilter />
            <CardContainer />
         </div>
      </>
   );
}

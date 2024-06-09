import { useState } from "react";
import Header from "./components/Header";
import "./style.css";
import { Outlet } from "react-router-dom";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext.js";

export default function App() {
   // const [darkMode, setDarkMode] = useState(false);
   console.log(ThemeContext);
   return (
      // ! ThemeContext is an object which contains a "React's Component" named as "Provider" so we can use it as a React Component and pass our <Header /> and <Outlet /> into the context
      // <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      //    <Header />
      //    <Outlet />
      // </ThemeContext.Provider>
      <ThemeContextProvider>
         <Header />
         <Outlet />
      </ThemeContextProvider>
   );
}

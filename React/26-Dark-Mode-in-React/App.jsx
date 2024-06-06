import { useState } from "react";
import Header from "./components/Header";
import "./style.css";
import { Outlet } from "react-router-dom";

export default function App() {
   // ! Better way to implement dark mode.
   const [darkMode, setDarkMode] = useState(false);
   return (
      <>
         <Header theme={[darkMode, setDarkMode]} />
         <Outlet context={[darkMode,setDarkMode]} />
      </>
   );
}

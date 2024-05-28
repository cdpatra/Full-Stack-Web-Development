import { useState } from "react";
import Header from "./components/Header";
import "./style.css";
import { Outlet } from "react-router-dom";

export default function App() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
}

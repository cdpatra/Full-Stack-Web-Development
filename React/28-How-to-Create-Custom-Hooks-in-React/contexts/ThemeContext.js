import { createContext, useState } from "react";
// ! Context API
// % we use context in those cases when we require to pass any variable through multiple level of components ( this is called as Prop Drilling), and this is not considered as good practice to pass variable into multiple levels of components so to solve this issue we create our own Context.

// ! to create a context react provide a function called as createContext()
export const ThemeContext = createContext(`Theme`);

// ! we cannot use useState() outside the react hook and outside the react components;

export function ThemeContextProvider({ children }) {
   const [darkMode, setDarkMode] = useState(false);
   return <ThemeContext.Provider value={[darkMode, setDarkMode]}>{children}</ThemeContext.Provider>;
}

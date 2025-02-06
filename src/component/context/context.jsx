// "use client";

// import { createContext, useMemo, useState } from "react";

// export const ThemeContext = createContext();

// export function ContextProvider({ children }) {
//   // Change theme
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   const [video , setVideo] = useState()

//   const toggleTheme = (newTheme) => {
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   const videoHandler = () => {
//     setVideo(false);
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, videoHandler, video }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default ContextProvider;

"use client";

import { createContext, useMemo, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme
  const [video, setVideo] = useState(false); // Default video state

  const [nav, setNav] = useState("");

  const navHandle = () => {
    setNav(nav === "" ? "active" : "");
  };

  // Load theme from localStorage only once after mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const videoHandler = () => setVideo(false);

  // Memoize context value to prevent unnecessary renders
  const contextValue = useMemo(
    () => ({ theme, toggleTheme, video, videoHandler, nav, navHandle }),
    [theme, video, nav]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ContextProvider;

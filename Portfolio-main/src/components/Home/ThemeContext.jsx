// import React, {
//   createContext,
//   useContext,
//   useState,
// } from "react";

// const ThemeStart = createContext();
// const ThemeStartUpdate = createContext();

// export const useThemeStart = () => {
//   return useContext(ThemeStart);
// };

// export const useThemeStartUpdate = () => {
//   return useContext(ThemeStartUpdate);
// };

// export const ThemeContext = ({ Children }) => {
//   const [isDark, setIsDark] = useState(false);

//   const handleClick = () => {
//     setIsDark((prev) => !prev);
//   };

//   return (
//     <ThemeStart.Provider value={isDark}>
//       <ThemeStartUpdate.Provider value={handleClick}>
//         {Children}
//       </ThemeStartUpdate.Provider>
//     </ThemeStart.Provider>
//   );
// };

// export default ThemeContext;

import React, { useState } from "react";
import { createContext, useContext } from "react";

const Theme = createContext();
const ThemeUpdate = createContext();

export const useTheme = () => useContext(Theme);
export const useThemeUpdate = () => useContext(ThemeUpdate);


export const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  function handleClick() {
    setIsDark((prev) => !prev);
  }

  return (
    <Theme.Provider value={isDark}>
      <ThemeUpdate.Provider value={handleClick}>
        {children}
      </ThemeUpdate.Provider>
    </Theme.Provider>
  );
};

export default ThemeContext;

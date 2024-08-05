import { createContext, useState } from "react";

export const AllOverContext = createContext({});

const OverallContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState(1);

  const handleActive = (value) => {
    setActive(value);
  };

  const handleClick = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <AllOverContext.Provider
      value={{ isDark, handleClick, active, handleActive }}
    >
      {children}
    </AllOverContext.Provider>
  );
};

export default OverallContext;

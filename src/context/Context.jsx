import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);

    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(DataContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Switch to {isDarkTheme ? "Light" : "Dark"} Theme
    </button>
  );
};

export default ThemeToggle;

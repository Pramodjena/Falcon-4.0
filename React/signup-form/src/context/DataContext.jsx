/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const saveData = (newData) => {
    setData([...data, newData]);
    localStorage.setItem("userData", JSON.stringify([...data, newData]));
  };

  const fetchData = () => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DataContext.Provider
      value={{ data, saveData, fetchData, isDarkTheme, toggleTheme }}
    >
      {children}
    </DataContext.Provider>
  );
};

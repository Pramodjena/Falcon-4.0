/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

const DataDisplay = () => {
  const { data, fetchData } = useContext(DataContext);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="data-display">
      <h2>Saved Data</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {data.length > 0 ? (
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DataDisplay;

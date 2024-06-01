/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// API :
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //   function getData() {
  //     setLoading(true);
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => console.log("Error from fetch data", error));
  //   }

  async function getData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [data]);

  //   loading ? <h1>Loading...</h1> : <h1>Data fetched successfully</h1>;
  //   if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Fetching the data below</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              {user.name}-{user.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetch;

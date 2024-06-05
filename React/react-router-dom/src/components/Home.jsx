/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div className="home p-4 max-w-ful">
      <h1 className="text-7xl">Home Page</h1>
      <div className="home-section flex justify-between">
        <div className="image-section">
          <img
            className="w-80"
            src="https://dreamwalk.com.au/wp-content/uploads/2021/02/Creating-Mobile-App.png"
            alt="home-img"
          />
        </div>

        <div className="text-section">
          <button className="text-[30px] w-[200px] p-4 rounded-md bg-orange-500">
            Download
          </button>
        </div>
      </div>
      <p className="text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
        recusandae.
      </p>
    </div>
  );
};

export default Home;

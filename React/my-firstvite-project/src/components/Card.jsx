/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../components/Card.css";

const Card = ({ user }) => {
  const { name, age, role, city } = user;

  return (
    <div>
      <div className="card_container">
        <div className="image_container">
          <img
            src="https://avatars.githubusercontent.com/u/103576706?v=4"
            alt="profile_pic"
          />
        </div>
        <div className="text_container">
          <p>Name:{name}</p>
          <p>Age:{age}</p>
          <p>Role:{role}</p>
          <p>City:{city}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

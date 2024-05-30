/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Show() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  return (
    <div>
      <h1>Update Your Name Here: {name2}</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name here"
      />
      <button onClick={() => setName2(name)}>Add your name</button>
    </div>
    // {make a form inclue username,email,password and a submit button. After submit show it on ui}
  );
}

export default Show;

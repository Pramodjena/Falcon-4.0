/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import ReactPlayer from "react";
const Form = () => {
  const [formData, setFormData] = useState([]);

  //useRef :
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: userName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    setFormData([...formData, user]);
    userName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input ref={userName} type="text" placeholder="Add Username" />
        <label htmlFor="">Email</label>
        <input ref={email} type="text" placeholder="Add Email" />
        <label htmlFor="">Password</label>
        <input ref={password} type="text" placeholder="Add Password" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {formData.map((user, i) => (
          <li key={i}>
            {user.name} -{user.email} - {user.password}
          </li>
        ))}
      </ul>
      {/* //todo make a todo application using useRef */}
    </div>
  );
};

export default Form;

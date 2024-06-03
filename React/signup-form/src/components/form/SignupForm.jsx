/* eslint-disable no-unused-vars */
// src/SignupForm.jsx
import React, { useState, useRef, useContext } from "react";
import { DataContext } from "../../context/DataContext";

const SignupForm = () => {
  const { saveData } = useContext(DataContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nameRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(formData);
    setFormData({ name: "", email: "", password: "" });
    nameRef.current.focus();
  };

  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;

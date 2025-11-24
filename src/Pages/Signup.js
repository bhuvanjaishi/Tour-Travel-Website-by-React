// src/components/SignUpPage.js

import React, { useState } from "react";
import "../App.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.lastname || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Registration successful! You can now login.");
    console.log("SignUp Data:", formData);

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
    });
  };

  return (
    <div id="signup-container">
      <div id="signup-card">
        <h2>Create Your Account</h2>
        <p>Join Tour & Travel and start planning your trips!</p>

        {error && <p id="error-message">{error}</p>}
        {success && <p id="success-message">{success}</p>}

        <form id="signup-form" onSubmit={handleSubmit}>
          <div id="form-group-firstname">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="John"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div id="form-group-lastname">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Doe"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div id="form-group-email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div id="form-group-password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div id="form-group-confirmPassword">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div id="form-group-contact">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="+977-9801234567"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <button id="signup-button" type="submit">Sign Up</button>
        </form>

        <div id="signup-links">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

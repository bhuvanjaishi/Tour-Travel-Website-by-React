// src/components/LoginPage.js

import React, { useState } from "react";
import "../App.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    console.log("Login Data:", formData);
  };

  return (
    <div id="login-container">
      <div id="login-card">
        <h2>Login to Travel Page</h2>
        <p>Enter your credentials to access your account</p>

        {error && <p id="error-message">{error}</p>}

        <form id="login-form" onSubmit={handleSubmit}>
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

          <div id="form-group-remember">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label>Remember Me</label>
          </div>

          <button id="login-button" type="submit">Login</button>
        </form>

        <div id="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <span> | </span>
          <a href="/signup">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// src/components/ContactPage.js

import React, { useState } from "react";
import "../App.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Example API call
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error. Please try again later.");
    }
  };

  return (
    <div id="contact-container">
      <h1 id="contact-title">Contact Us</h1>
      <p id="contact-subtitle">
        Have any questions about our tour packages? Let us know how we can help.
      </p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="form-group-name">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div id="form-group-email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div id="form-group-phone">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div id="form-group-subject">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div id="form-group-message">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button id="contact-button" type="submit">Send Message</button>
      </form>

      {status && <p id="contact-status">{status}</p>}

      <div id="office-info">
        <h2>Our Office</h2>
        <p>123 Travel Street, Kathmandu, Nepal</p>
        <p>Email: info@yourtravelagency.com</p>
        <p>Phone: +977-1-2345678</p>
      </div>

      <div id="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

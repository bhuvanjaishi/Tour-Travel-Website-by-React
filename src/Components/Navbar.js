import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // track route change

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false); // close menu on navigation
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Tour & Travel</Link>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      {/* Menu */}
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

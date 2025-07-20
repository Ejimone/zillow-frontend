import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../Styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {!isMobile && (
        <div className="nav-left nav-links">
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/mortgage">Get a Mortgage</Link>
        </div>
      )}

      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="nav-logo" />
        </Link>
      </div>

      {!isMobile && (
        <div className="nav-right">
          <div className="nav-links">
            <a href="#agent">Find an Agent</a>
            <a href="#rentals">Manage Rentals</a>
            <a href="#advertise">Advertise</a>
            <a href="#help">Help</a>
          </div>
          <a href="#signin" className="nav-signin">
            Sign In
          </a>
        </div>
      )}

      {isMobile && (
        <div className={`nav-right responsive`}>
          <a href="#signin" className="nav-signin">
            Sign In
          </a>
        </div>
      )}

      {isMenuOpen && (
        <div className="mobile-nav-links open">
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/mortgage">Get a Mortgage</Link>
          <a href="#agent">Find an Agent</a>
          <a href="#rentals">Manage Rentals</a>
          <a href="#advertise">Advertise</a>
          <a href="#help">Help</a>
          <a href="#signin">Sign In</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;

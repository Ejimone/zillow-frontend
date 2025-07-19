import { useEffect, useState } from "react";
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
          <a href="#buy">Buy</a>
          <a href="#rent">Rent</a>
          <a href="#sell">Sell</a>
          <a href="#mortgage">Get a Mortgage</a>
        </div>
      )}

      <div className="nav-center">
        <a href="#home">
          <img src={logo} alt="Company Logo" className="nav-logo" />
        </a>
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
          <a href="#buy">Buy</a>
          <a href="#rent">Rent</a>
          <a href="#sell">Sell</a>
          <a href="#mortgage">Get a Mortgage</a>
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

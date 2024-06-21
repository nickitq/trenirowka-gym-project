import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

import { useState, useEffect } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRENIROWKA <i class="fa-solid fa-dumbbell"></i>
            {/* <i class="fa-solid fa-dumbbell"></i> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
                Info
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/prices"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Prices
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {button && (
            <Button buttonStyle="btn--outline" path="/sign-up">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

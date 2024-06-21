import React, { useState } from "react";
import "../../../App.css";
import "./Signup.css";
import Footer from "../../Footer.jsx";
import "../../Button.css";

export const Signup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <>
      <main>
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" />
              </div>
            )}

            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email Id" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
          </div>

          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Lost Password? <span>Click here</span>
            </div>
          )}

          <div className="submit-container">
            <div
              className={
                action === "Login"
                  ? "btn--outline btn--large"
                  : "btn--primary btn--large"
              }
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={
                action === "Sign Up"
                  ? "btn--outline btn--large"
                  : "btn--primary btn--large"
              }
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

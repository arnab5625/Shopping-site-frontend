import React, { useState } from "react";
import "../styles/Profile.css";

export default function Login() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="unerline"></div>
      </div>

      <div className="inputs">
        {action === "Log in" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="/img/user.png" alt="" />
            <input type="text" placeholder="Name"></input>
          </div>
        )}

        <div className="input">
          <img src="/img/mail.png" alt="" />
          <input type="email" placeholder="Email Address"></input>
        </div>
        <div className="input">
          <img src="/img/password.png" alt="" />
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password, <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Log in" ? "submit" : "submit gray"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit" : "submit gray"}
          onClick={() => {
            setAction("Log in");
          }}
        >
          Log in
        </div>
      </div>
    </div>
  );
}

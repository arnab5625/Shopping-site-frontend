import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img src="/img/logo.png" />
        <Link to="/" className="site-name">
          <h4>Find Your Tech NEED!</h4>
        </Link>
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-products">All Products</Link>
        </li>
        <li>
          <Link to="/product-modification"> Product Admin</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <img style={{width:"25px"}} src="/img/cart.png"/>
        </li>
      </ul>
    </nav>
  );
}

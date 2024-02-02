import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/CreateProduct"> CreateProduct</Link>
        </li>
      </ul>
    </nav>
  );
}

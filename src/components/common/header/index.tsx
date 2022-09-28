import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header-container">
      <div className="web-title">
        <Link to="/">Welcome To Nisum pakistan </Link>
      </div>
      <div className="navs">
        <ul className="nav-items">
          <li>
            <Link to="/todos">Add Todo </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

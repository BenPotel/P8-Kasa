import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/Kasa.svg";

function Header() {
  return (
    <header className="header_nav">
      {/* Clickable Logo, redirect to the home page */}
      <NavLink to="/">
        <img src={logo} alt="logo Kasa" />
      </NavLink>
      <nav className="nav_links">
        {/* Home page link */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Accueil
        </NavLink>
        {/* About page link */}
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

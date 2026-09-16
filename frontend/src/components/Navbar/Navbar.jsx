import { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* Menu */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      {/* Right side */}
      <div className="navbar-right">
        {/* Search */}
        <img src={assets.search_icon} alt="Search" className="search-icon" />

        {/* Basket */}
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />

          {/* Notification dot */}
          <div className="dot"></div>
        </div>

        {/* Sign in */}
        <button className="signin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* Menu */}
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>

        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>

        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>

        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
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

// مسیر فایل: src/components/Navbar/Navbar.js

import React from "react";
import { FaShoppingCart, FaUser, FaBell, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/full-horizontal.svg";


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* بخش راست: آیکون‌های کاربری */}
      <div className="navbar-right">
        <FaShoppingCart className="icon" />
        <span>|</span>
        <FaUser className="icon" />
        <span />
        <FaBell className="icon" />
      </div>

      {/* بخش وسط: جستجو و لوگو */}
      <div className="navbar-center">
        <div className="search-box">
          <input type="text" placeholder="جستجو" />
          <FaSearch className="search-icon" />
        </div>
        <img src={Logo} alt="دیجی‌کالا" className="logo" />

      </div>
    </nav>
  );
};

export default Navbar;

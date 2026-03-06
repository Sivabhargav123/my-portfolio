import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import profile from '../assets/profile.webp'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
         <div className="nav-img-container"> 
        <div className="nav-image">
          <img src={profile} alt="Siva Bhargav" />
        </div>
        <h2 className="logo">Siva Bhargav</h2>
</div>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#summary">Summary</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
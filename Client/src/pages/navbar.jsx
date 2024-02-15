import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import logoImg from '../assets/logo.jpg';
import adminImg from '../assets/admin.jpg';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
        <li><NavLink to="/learning" activeClassName="active">E-LEARNING</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">COURSES</NavLink></li>
        <li><NavLink to="/collection" activeClassName="active">COLLECTION</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">ABOUT US</NavLink></li>
        <li className="dropdown" onClick={toggleDropdown}>
          <div className="contact-us">
            CONTACT US <FaAngleDown />
          </div>
          {isDropdownOpen && (
            <ul className="sub-menu">
              <li><NavLink to="/internship">Internship</NavLink></li>
              <li><NavLink to="/jobs">Jobs</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="circle-image">
        <img src={adminImg} alt="Circle Image" />
      </div>
    </nav>
  );
};

export default Navbar;

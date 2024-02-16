import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import logoImg from '../../assets//logo.jpg';
import adminImg from '../../assets/admin.jpg';
import { FaAngleDown, FaBars } from 'react-icons/fa'; // Import the menu icon
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material'; // Import useMediaQuery

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:1024px)');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="main">

      <div className="logo-container">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="social-swirl">Social Swirl</div>
      </div>

      <nav className="navbar">
        {/* Large Screens */}
        {!isMobile && (
          <ul className="nav-links">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <div className="contact-us">
                Careers <ArrowDropDownIcon />
              </div>
              {isDropdownOpen && (
                <ul className="sub-menu">
                  <li><NavLink to="/internship">Internship</NavLink></li>
                  <li><NavLink to="/jobs">RemoteJob</NavLink></li>
                </ul>
              )}
            </li>
            <li><NavLink to="/business">Business Outsourcing</NavLink></li>
            <li><NavLink to="/learning">E-Learning</NavLink></li>
          </ul>
        )}

        {/* Login Button */}
        <div className="login-button">
          <button>LOGIN</button>
        </div>

        {/* Circle Image with Slider */}
        <div className="circle-image" onClick={toggleSlider}>
          <img src={adminImg} alt="Circle Image" />
          {isSliderOpen && (
            <div className="slider">
              <List>
                <ListItem button component={NavLink} to="/dashboard" onClick={toggleSlider}>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={NavLink} to="/logout" onClick={toggleSlider}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </div>
          )}
        </div>

        {/* Menu Icon for Mobile Screens */}
        {isMobile && (
          <IconButton
            className="menu-icon"
            onClick={toggleDrawer(!isDrawerOpen)}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <FaBars />
          </IconButton>
        )}

        {/* Drawer for Small Screens */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={NavLink} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={NavLink} to="/internship" onClick={toggleDrawer(false)}>
              <ListItemText primary="Internship" />
            </ListItem>
            <ListItem button component={NavLink} to="/jobs" onClick={toggleDrawer(false)}>
              <ListItemText primary="RemoteJob" />
            </ListItem>
            <ListItem button component={NavLink} to="/business" onClick={toggleDrawer(false)}>
              <ListItemText primary="Business Outsourcing" />
            </ListItem>
            <ListItem button component={NavLink} to="/learning" onClick={toggleDrawer(false)}>
              <ListItemText primary="E-Learning" />
            </ListItem>
          </List>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;

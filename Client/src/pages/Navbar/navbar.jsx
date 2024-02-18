import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import logoImg from '../../assets//logo.jpg';
import adminImg from '../../assets/admin.jpg';
import { FaAngleDown, FaBars } from 'react-icons/fa';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:1124px)');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      window.addEventListener('click', closeDropdown);
    }

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (event) => {
    event.stopPropagation();
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
    <div className='meee'>
      <div className="main">
        <div className="logo-container">
          <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <div className="social-swirl">
            Social Swirl
          </div>
        </div>
        <nav className="navbar">
          {!isMobile && (
            <ul className="nav-links">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li className="dropdown" ref={dropdownRef}>
                <div className="contact-us" onClick={toggleDropdown}>
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

          {!isMobile && (
            <div className="login-button">
              <button>LOGIN</button>
            </div>
          )}

          <div className="circle-image" onClick={toggleSlider}>
            <img src={adminImg} alt="Circle Image" />
          </div>

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
          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={NavLink} to="/about" onClick={toggleDrawer(false)}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem id='career' onClick={toggleDropdown}>
                <ListItemText primary="Careers"  />
                <ArrowDropDownIcon />
              </ListItem>
              {isDropdownOpen && (
                <List >
                  <ListItem button component={NavLink} to="/internship" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Internship" />
                  </ListItem>
                  <ListItem button component={NavLink} to="/jobs" onClick={toggleDrawer(false)}>
                    <ListItemText primary="RemoteJob" />
                  </ListItem>
                </List>
              )}
              <ListItem button component={NavLink} to="/business" onClick={toggleDrawer(false)}>
                <ListItemText primary="Business Outsourcing" />
              </ListItem>
              <ListItem button component={NavLink} to="/learning" onClick={toggleDrawer(false)}>
                <ListItemText primary="E-Learning" />
              </ListItem>
            </List>
            <div id="login">
              <button>Login</button>
            </div>
          </Drawer>

          {/* Slider */}
          {isSliderOpen && (
            <div id="slider"  style={{marginBottom:'13px', background:'#D3D3D3', height:'60px', display:'flex', flexDirection:'column', justifyContent:'center', padding:'5px'}}>
              <div className="slide" style={{padding:'5px'}}>Dashboard</div>
              <div className="slide"  style={{padding:'5px'}}>Logout</div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

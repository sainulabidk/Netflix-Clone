import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

 
function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
  
      <div className="right-section">
     
 
        {/* <FontAwesomeIcon icon={farBell} /> */}
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>
    </div>
  );
}

export default Navbar;

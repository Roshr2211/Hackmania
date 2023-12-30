// React Component (Header.js)

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

//import logo from './path/to/your/logo.png'; // Replace with the path to your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* <img src={logo} alt="StudyHub Logo" /> */}
        <Link to="/">StudyHub</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/groups">Study Groups</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;

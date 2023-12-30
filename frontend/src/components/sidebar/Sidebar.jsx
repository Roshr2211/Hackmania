import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav className="sidebar-nav">
        <Link to="/">Home</Link>
        <Link to="/groups">Study Groups</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

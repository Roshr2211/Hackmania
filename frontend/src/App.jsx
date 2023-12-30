import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headside from './components/Headside/Headside';
import Home from './pages/Home/Home';
import StudyGroups from './pages/StudyGroups/StudyGroups';
import Schedule from './pages/Schedule/Schedule';
import UserProfile from './pages/UserProfile/UserProfile';
import './App.css'; // Add a global stylesheet for overall styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Display either Header or Sidebar based on screen width */}
        <Headside />
        <div className="main-container">
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groups" element={<StudyGroups />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

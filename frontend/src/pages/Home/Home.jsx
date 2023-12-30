import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to StudyHub</h1>
      <p>
        Studying is a collaborative journey. Connect with study groups, enhance teamwork on assignments,
        and conquer challenges collectively to elevate your academic performance.
      </p>
      <div className="cta-button">
        <a href="/groups">Join a Study Group</a>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../header/Header'; // Adjust the path accordingly
import Sidebar from '../sidebar/Sidebar'; // Adjust the path accordingly
import './headside.css';

const Headside = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <Sidebar /> : <Header />;
};

export default Headside;

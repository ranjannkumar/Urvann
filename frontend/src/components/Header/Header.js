import React from 'react';
import './Header.css';
import headerImg from '../../assets/header_img.png'; // adjust path as needed

const Header = () => {
  return (
    <div 
      className='header' 
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="header-contents">
        <h2>Find your perfect plant here</h2>
        <p>Explore a wide variety of indoor, outdoor, and unique plants...</p>
        <a href="#explore-menu"><button>View Catalog</button></a>
      </div>
    </div>
  );
};

export default Header;

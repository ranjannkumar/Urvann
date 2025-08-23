import React from 'react';
import './ExploreMenu.css';
import { plant_menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our plant categories</h1>
      <p className='explore-menu-text'>Browse our diverse collection of plants by category. Select a category to see related plants, or view all to explore our entire catalog.</p>
      <div className="explore-menu-list">
        {plant_menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

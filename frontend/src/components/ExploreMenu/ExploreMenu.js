import React, { useContext, useEffect, useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory, setSearchQuery }) => {
  const { url } = useContext(StoreContext);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(url + "/api/plants/categories");
      if (response.data.success) {
        setCategories(response.data.data);
      } else {
        console.error("Failed to fetch categories:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [url]);

  const handleCategoryClick = (menu_name) => {
    setCategory(prev => prev === menu_name ? "All" : menu_name);
    setSearchQuery(""); // Clear search query when a new category is selected
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our plant categories</h1>
      <p className='explore-menu-text'>Browse our diverse collection of plants by category. Select a category to see related plants, or view all to explore our entire catalog.</p>
      <div className="explore-menu-list">
        {categories.map((item, index) => {
          // You need to add an image for each category here. I'm using a placeholder.
          // Add images to `frontend/src/assets` and import them in `assets.js`
          return (
            <div
              onClick={() => handleCategoryClick(item)}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category === item ? "active" : ""} src={assets[`menu_${item.toLowerCase().replace(' ', '_')}`] || assets.placeholder_menu} alt={item} />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

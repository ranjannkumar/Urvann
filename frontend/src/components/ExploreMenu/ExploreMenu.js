import React, { useContext, useEffect, useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const ExploreMenu = ({ category, setCategory, setSearchQuery }) => {
  const { url } = useContext(StoreContext);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(url + "/api/plants/categories");
      setCategories(["All", ...response.data.data]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (menu_name) => {
    setCategory(prev => prev === menu_name ? "All" : menu_name);
    setSearchQuery(""); // Clear search query when a category is selected
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our plant categories</h1>
      <p className='explore-menu-text'>Browse our diverse collection of plants by category. Select a category to see related plants, or view all to explore our entire catalog.</p>
      <div className="explore-menu-list">
        {categories.map((item, index) => {
          return (
            <div
              onClick={() => handleCategoryClick(item)}
              key={index}
              className="explore-menu-list-item"
            >
              {/* You will need to manage images for your categories */}
              <img className={category === item ? "active" : ""} src={`/path/to/${item.toLowerCase()}.png`} alt={item} />
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

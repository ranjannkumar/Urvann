// This is the individual plant card component.
import React, { useContext } from 'react';
import './PlantItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const PlantItem = ({ id, name, price, description, image, availability, categories }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  const isItemInCart = cartItems && cartItems[id] > 0;

  return (
    <div className='plant-item'>
      <div className="plant-item-img-container">
        <img className='plant-item-image' src={url + "/images/" + image} alt="" />
        {availability && !isItemInCart ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
        ) : (
          availability && (
            <div className="plant-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          )
        )}
      </div>
      <div className="plant-item-info">
        <div className="plant-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="plant-item-desc">{description}</p>
        <p className="plant-item-price">${price}</p>
        <div className="plant-item-availability">
          <p><strong>Availability:</strong> {availability ? "In Stock" : "Out of Stock"}</p>
        </div>
        <div className="plant-item-categories">
          {categories.map((cat, index) => (
            <span key={index} className="category-tag">{cat}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;

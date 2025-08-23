// This is the individual plant card component, now with a cart button.
import React, { useContext } from 'react';
import './PlantItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const PlantItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='plant-item'>
      <div className="plant-item-img-container">
        <img className='plant-item-image' src={url + "/images/" + image} alt="" />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
        ) : (
          <div className="plant-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="plant-item-info">
        <div className="plant-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="plant-item-desc">{description}</p>
        <p className="plant-item-price">${price}</p>
      </div>
    </div>
  );
};

export default PlantItem;
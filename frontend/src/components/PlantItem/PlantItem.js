import React, { useContext } from 'react';
import './PlantItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const PlantItem = ({ id, name, price, description, image, availability, categories }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    // Check if the item is in the cart
    const isItemInCart = cartItems && cartItems[id] > 0;

    return (
        <div className='plant-item'>
            <div className="plant-item-img-container">
                <img className='plant-item-image' src={url + "/images/" + image} alt="" />
                {/* Conditionally render add to cart button based on availability */}
                {availability ? (
                    !isItemInCart ? (
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                    ) : (
                        <div className="plant-item-counter">
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add one more" />
                        </div>
                    )
                ) : (
                    <div className="out-of-stock-label">Out of Stock</div>
                )}
            </div>
            <div className="plant-item-info">
                <div className="plant-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="plant-item-desc">{description}</p>
                <p className="plant-item-price">${price}</p>
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

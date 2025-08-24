// The navigation bar is updated to include a search bar, and conditional links for admin users.
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, setSearchQuery }) => {
    const [menu, setMenu] = useState("menu");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Assuming you have a way to determine the user role from the token
    const isAdmin = token && JSON.parse(atob(token.split('.')[1])).email === 'admin@urvann.com';

    return (
        <div className='navbar'>
            <Link to='/' ><img src={assets.logo} alt='' className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("conatct us")} className={menu === "conatct us" ? "active" : ""}>contact us</a>
                {isAdmin && <Link to='/add' onClick={() => setMenu("add-plant")} className={menu === "add-plant" ? "active" : ""}>add plant</Link>}
            </ul>
            <div className='navbar-right'>
                <div className="navbar-search-container">
                    <input
                        type="text"
                        placeholder="Search plants..."
                        onChange={handleSearchChange}
                    />
                    <img src={assets.search_icon} alt="" />
                </div>
                <div className="navbar-search-icon">
                    <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>sign in</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

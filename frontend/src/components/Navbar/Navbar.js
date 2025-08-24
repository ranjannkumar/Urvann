// File: frontend/src/components/Navbar/Navbar.js
import React, { useContext, useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, setSearchQuery, setCategory }) => {
    const [menu, setMenu] = useState("menu");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
        setShowDropdown(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCategory("All");
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isAdmin = token && JSON.parse(atob(token.split('.')[1])).email === 'admin@urvann.com';

    return (
        <div className='navbar'>
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}><img src={assets.logo} alt='' className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <Link to='/' onClick={() => { setMenu("menu"); setTimeout(() => document.getElementById("explore-menu")?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={menu === "menu" ? "active" : ""}>menu</Link>
                <Link to='/' onClick={() => { setMenu("mobile-app"); setTimeout(() => document.getElementById("app-download")?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={menu === "mobile-app" ? "active" : ""}>mobile-app</Link>
                <Link to='/' onClick={() => { setMenu("contact us"); setTimeout(() => document.getElementById("footer")?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={menu === "contact us" ? "active" : ""}>contact us</Link>
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
                    <div
                        className='navbar-profile'
                        onClick={() => setShowDropdown(!showDropdown)}
                        ref={dropdownRef}
                    >
                        <img src={assets.profile_icon} alt="" />
                        {showDropdown && (
                            <ul className="nav-profile-dropdown">
                                <li onClick={() => { navigate('/myorders'); setShowDropdown(false); }}>
                                    <img src={assets.bag_icon} alt="" /><p>Orders</p>
                                </li>
                                <hr />
                                <li onClick={logout}>
                                    <img src={assets.logout_icon} alt="" /><p>Logout</p>
                                </li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
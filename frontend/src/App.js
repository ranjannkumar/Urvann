import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Add from './pages/Add/Add';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import StoreContextProvider from './context/StoreContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <StoreContextProvider>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        {/* Pass setSearchQuery and category state to Navbar */}
        <Navbar setShowLogin={setShowLogin} setSearchQuery={setSearchQuery} setCategory={setCategory} />
        <Routes>
          {/* Pass searchQuery and category state to Home */}
          <Route path='/' element={<Home category={category} setCategory={setCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add' element={<Add />} /> 
        </Routes>
      </div>
      <Footer />
    </StoreContextProvider>
  );
};

export default App;
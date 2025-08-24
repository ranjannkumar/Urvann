import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar/Navbar';
import StoreContextProvider from './context/StoreContext';
import Add from './pages/Add/Add';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <StoreContextProvider>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} setSearchQuery={setSearchQuery} setCategory={setCategory} />
        <Routes>
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
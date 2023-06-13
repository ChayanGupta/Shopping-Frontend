import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/dashboard/Dashboard'
import Contact from './components/Contact'
import About from './components/About'
import UserDashboard from './components/UserDashboard'

function App() {

  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Navbar setCartOpen={setCartOpen} cartOpen={cartOpen} />
      <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/products' element={<Products />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;

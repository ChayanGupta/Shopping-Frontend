import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/CartSlice';
import { logout } from '../redux/AuthSlice';

const Navbar = ({ setCartOpen, cartOpen }) => {

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(addToCart([]))
    dispatch(logout())
    navigate('/login');
  }

  return (
    <div className='sticky flex content-center p-5 text-black bg-yellow-100 justify-evenly'>
      <h1 className='text-2xl text-pink-500'>Shopping App</h1>
      <ul className='flex content-center gap-10 text-xl justify-evenly'>
        <Link to='/home'><li className='hover:text-purple-600'>Home</li></Link>
        <Link to='/about'><li className='hover:text-purple-600'>About</li></Link>
        <Link to='/contact'><li className='hover:text-purple-600'>Contact</li></Link>
      </ul>
      <ul className='flex content-center gap-10 text-xl justify-evenly'>
        {isLoggedIn ? <li className='hover:text-purple-600 hover:cursor-pointer' onClick={handleLogout}>Logout</li>
          : <>
            <Link to='/login'><li className='hover:text-purple-600'>Login</li></Link>
            <Link to='/register'><li className='hover:text-purple-600'>Register</li></Link>
          </>}
        <i className='text-3xl bx bxs-cart hover:text-purple-600' onClick={() => setCartOpen(!cartOpen)}></i>
      </ul>
    </div>
  )
}

export default Navbar
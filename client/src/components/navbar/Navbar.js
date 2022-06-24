import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';



function Navbar() {
  return (
    <nav className='nav'>
      <Link className='NavLink' to={'/'}>
     abc
      </Link>
      <FaBars className='Bars'/>
      <div className='NavMenu'>
      <Link className='NavLink' to={"/Contactus"}> Contact us </Link>
      <Link className='NavLink' to={"/Services"}> Services </Link>
      <Link  className='NavLink' to={"/Products"}> Products </Link>
      
      </div>
      <nav className='Navbtn'>
        <Link className='NavBtnLink' to={"/Products"}> Sign In</Link>

      </nav>

    </nav>
  )
}

export default Navbar
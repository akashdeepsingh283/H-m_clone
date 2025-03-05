import React, { useState } from 'react'
import dotSvg from '/dot.svg'
import logo from '/logo.svg'
import man from '/man.svg'
import heart from '/heart.svg'
import bag from '/bag.svg'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import Darkmode from './Darkmode'
import { DarkModeContext } from '../context/Darkmodecontext';




const Navbar = () => {
  const {getcartcount,counter}= useContext(ShopContext);
  const {isDarkMode}=useContext(DarkModeContext);
  const color = isDarkMode ? 'white' : '#100505';

  const colorfunction=()=>{
    if (isDarkMode) {
      setcolor('white');
    } else {
      setcolor('#100505');
    }
  }
  
  
  return (
    <div className={isDarkMode?'overallnav darkmodenav':'overallnav'}>
      <div className='leftnav'>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        Contact
      </NavLink>
      <NavLink
        to="/orders"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        Orders
      </NavLink>
      </div>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='rightnav'>
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      ><div className='rightmostnav'>
            <img src={man} alt=""  className='sidelogo'/>
            Sign in
        </div>
      </NavLink>
      <NavLink
        to="/collection"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      ><div className='rightmostnav'>
            <img src={heart} alt="" className='sidelogo'/>
            Favourites
        </div>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      ><div className='rightmostnav'>
            <img src={bag} alt="" className='sidelogo' />
            <span className="cart-counter">{counter}</span>
            Shopping bag
        </div>
      </NavLink>
        <div>
          <Darkmode/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

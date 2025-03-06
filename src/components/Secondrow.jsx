import React from 'react'
import search from '/search.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'
import {useContext} from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

const Secondrow = () => {
  const {isDarkMode}=useContext(DarkModeContext);
  const color = isDarkMode ? 'white' : '#100505';
  return (
    <div className={isDarkMode?'secondrow darkmodenav':'secondrow'}>
        <div>
            
        </div>
      <div className='secondnavlist'>
      <NavLink
        to="/ladies"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        Ladies
      </NavLink>
      <NavLink
        to="/Men"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        Men
      </NavLink>
      <NavLink
        to="/Kids"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        Kids
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: color,
        })}
      >
        H&M Home
      </NavLink>
      </div>
      <Searchbar/>
    </div>
  )
}

export default Secondrow

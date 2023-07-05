import React from 'react'
import React_Router_logo from '../assets/react-router-logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
      <nav className="nav_container">
        <div className="nav_container_logo">
          <h2>React Router</h2>
        </div>
        <div className="nav_container_link">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='products'>Products</NavLink>
          <NavLink to='login'>Login</NavLink>
        </div>
      </nav>
  )
}

export default NavBar
import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'


function Title() {
  return (
    <div className="BUTTERTitle">
      <header>
        <h1 className = "banner">Buttercraft Cakes</h1>
        <small className="Title-Subtitle">Lookbook</small>

        <div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">Looks</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/contact">Contact</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title

